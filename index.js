const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const asyncWriteFile = util.promisify(fs.writeFile);

function readmeSetup() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of this project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of this project"
    },
    {
      type: "input",
      name: "instructions",
      message: "Please enter installation instructions."
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage guidelines for this project."
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide contribution instructions/guidelines."
    },
    {
      type: "input",
      name: "tests",
      message: "Provide any test instructions here."
    }
  ]);
}

function generateREADME(answers) {
  return `
`;
}

async function init() {
  try {
    const answers = await readmeSetup();

    const html = generateREADME(answers);

    await asyncWriteFile("projectREADME.md", md);

    console.log("Successfully wrote to projectREADME.md");
  } catch(err) {
    console.log(err);
  }
}

init();