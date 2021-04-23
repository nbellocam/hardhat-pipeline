import { ethers } from "hardhat";
import { expect } from 'chai';
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe('MyNFT', function () {
  const name = 'My NFT';
  const symbol = 'MN';
  const baseURI = 'my.app/';

  const DEFAULT_ADMIN_ROLE = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const MINTER_ROLE = ethers.utils.solidityKeccak256([ "string", ], [ "MINTER_ROLE" ])

  let deployer: SignerWithAddress, other: SignerWithAddress;
  let contractInstance : Contract;
  let contractFactory: ContractFactory;

  before(async function() {
    [deployer, other] = await ethers.getSigners();
    contractFactory = await ethers.getContractFactory("MyNFT", deployer);
  });

  beforeEach(async function() {
    contractInstance = await contractFactory.deploy(baseURI);
  });

  it('token has correct name', async function () {
    expect(await contractInstance.name()).to.equal(name);
  });

  it('token has correct symbol', async function () {
    expect(await contractInstance.symbol()).to.equal(symbol);
  });

  it('token has correct base URI', async function () {
    expect(await contractInstance.baseURI()).to.equal(baseURI);
  });

  it('deployer has the default admin role', async function () {
    expect(await contractInstance.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.be.equal('1');
    expect(await contractInstance.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.equal(deployer.address);
  });

  it('deployer has the minter role', async function () {
    expect(await contractInstance.getRoleMemberCount(MINTER_ROLE)).to.be.equal('1');
    expect(await contractInstance.getRoleMember(MINTER_ROLE, 0)).to.equal(deployer.address);
  });

  it('minter role admin is the default admin', async function () {
    expect(await contractInstance.getRoleAdmin(MINTER_ROLE)).to.equal(DEFAULT_ADMIN_ROLE);
  });

  describe('minting', function () {
    it('deployer can mint tokens', async function () {
      const tokenId = ethers.BigNumber.from("0")

      await expect( contractInstance.connect(deployer).mint(other.address))
        .to.emit(contractInstance, 'Transfer')
        .withArgs(ethers.constants.AddressZero, other.address, tokenId);

      expect(await contractInstance.balanceOf(other.address)).to.be.equal('1');
      expect(await contractInstance.ownerOf(tokenId)).to.equal(other.address);

      expect(await contractInstance.tokenURI(tokenId)).to.equal(baseURI + tokenId);
    });

    it('other accounts cannot mint tokens', async function () {
      await expect(
        contractInstance.connect(other).mint(other.address)
      ).to.be.revertedWith('Must have minter role to mint');
    });
  });

  describe('pausing', function () {
    it('deployer can pause', async function () {
      await expect( contractInstance.connect(deployer).pause())
        .to.emit(contractInstance, 'Paused')
        .withArgs(deployer.address);

      expect(await contractInstance.paused()).to.equal(true);
    });

    it('deployer can unpause', async function () {
      await contractInstance.connect(deployer).pause();

      expect(await contractInstance.connect(deployer).unpause())
        .to.emit(contractInstance, 'Unpaused')
        .withArgs(deployer.address);

      expect(await contractInstance.paused()).to.equal(false);
    });

    it('cannot mint while paused', async function () {
      await contractInstance.connect(deployer).pause();

      await expect(
        contractInstance.connect(deployer).mint(other.address)
      ).to.be.revertedWith('ERC721Pausable: token transfer while paused');
    });

    it('other accounts cannot pause', async function () {
      await expect(
        contractInstance.connect(other).pause()
      ).to.be.revertedWith('Must have pauser role to pause');
    });
  });

  describe('burning', function () {
    it('holders can burn their tokens', async function () {
      const tokenId = ethers.BigNumber.from("0")

      await contractInstance.connect(deployer).mint(other.address);

      await expect(contractInstance.connect(other).burn(tokenId))
        .to.emit(contractInstance, 'Transfer')
        .withArgs(other.address, ethers.constants.AddressZero, tokenId);

      expect(await contractInstance.balanceOf(other.address)).to.be.equal('0');
      expect(await contractInstance.totalSupply()).to.be.equal('0');
    });
  });
});