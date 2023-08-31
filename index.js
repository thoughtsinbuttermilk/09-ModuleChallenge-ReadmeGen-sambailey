// required
const fs = require('fs');
const inquirer = require('inquirer');

const questions = require('./utils/userInput');

// goal: compartmentalize the functions of this application
// TODO: write a function to write md to file
// TODO: write a function to initialize app

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
    // .then((response) => {
    //     writeToFile(response.fileName, response);
    // })
    // .catch(err => {
    //     console.log(err)
    // });
}
// initialize the application (after it exists!)
init();
