// required
const fs = require("fs");
const inquirer = require("inquirer");

const questions = require("./utils/userInput");
const generateMarkdown = require("./utils/markdownDynamo");

// goal: compartmentalize the functions of this application
// TODO: write a function to write md to file
// TODO: write a function to initialize app

// function to write markdown file, uses template literal from generateMarkdown
function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(`${fileName}.md has been generated.`)
  );
}

function init() {
  console.log(`
    =============================
    
    welcome to the README Dynamo! 
    answer the following question
    prompts to feed information
    to the generator

    press ctrl+c to quit

    =============================
    `);

    inquirer
      .prompt(questions)
      .then((response) => {
        writeToFile(`./dist/${response.fileName}`, response);
      })
      .catch((err) => {
        console.log(err);
      });
}
// initialize the application (after it exists!)
init();
