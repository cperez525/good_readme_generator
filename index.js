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
    },
    {
      type: "list",
      name: "license",
      message: "Which license do you prefer for this project?",
      choices: ["GNUAGPLv3", "GNUGPLv3", "MozillaPublicLicense2.0", "ApacheLicense2.0", "MITLicense", "BoostSoftwareLicense1.0", "TheUnlicense"]
    }
  ]);
}

function generateREADME(answers) {
  return `
  # ${answers.title} ![license badge](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=red)
  ${answers.description}

  ## Table of Contents
  [Instructions](#instructions)  
  [Usage](#usage)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [License](#license)

  ## Instructions
  ${answers.instructions}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}
`;
}

async function initialize() {
  try {
    const answers = await readmeSetup();

    const md = generateREADME(answers);

    await asyncWriteFile(answers.title + "README.md", md);

    console.log("Successfully wrote to projectREADME.md");
  } catch(err) {
    console.log(err);
  }
}

initialize();