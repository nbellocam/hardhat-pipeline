# Hardhat Tasks
This directory contains task files, written in TypeScript. Tasks in Hardhat are asynchronous JavaScript functions that get access to the Hardhat Runtime Environment, through which you get access to the configuration, parameters, programmatic access to other tasks and any objects plugins may have injected.

## Executing a Task
On a command-line terminal, run the following command (replace the placeholder with the task's name): 
- Without arguments: `npx hardhat {taskName}`
- With Arguments: `npx hardhat {taskName} --{ArgumentName} {ArgumentValue}`

## Creating a Task
Please review the document [Creating a task](https://hardhat.org/guides/create-task.html) from the official documentation for details and instructions.

Note: remember to use TypeScript syntax and save it as a .ts file.
