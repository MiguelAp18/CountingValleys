const inquirer = require("inquirer");


const instructions = [
  {
    type: "list",
    name: "option",
    message: "Available actions:",
    choices: [
      {
        value: 1,
        name: `1) PLAY COUNTING VALLEYS`
      },
      {
        value: 2,
        name: `2) EXIT`
      },
    ]
  },
];


const menu = async () => {
  console.clear();
  console.log("\n\n");
  console.log("==============================================");
  console.log("\t Main Menu");
  console.log("==============================================\n");

  const { option } = await inquirer.prompt(instructions);
  return option;
}

const pause = async () => {
  const question = [
      {
          type: "input",
          name: "enter",
          message: `Press ENTER to continue. . .`
      }
  ];

  console.log("\n");
  await inquirer.prompt(question);
}

const readInput = async (msg) => {
  const question = [
    {
      type: "input",
      name: "step",
      message: msg,
      validate(value) {
        if (value.length === 0) {
          return "Please, enter a value"
        }
        return true;
      }
    }
  ];

  const { step } = await inquirer.prompt(question);
  return step;
}


module.exports = {
  menu,
  pause,
  readInput,
}