// TODO: Include packages needed for this application

// include required filesystem (fs) module, export promises module
const fileSystem = require('fs').promises;

// include required inquirer modedule
const inquirer = require('inquirer');

// include required markdownDynamo js utilities
const mdDynamo = require('./utils/markdownDynamo');

// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            title: 'title',
            message: 'please enter the title of your project: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'please enter a descrption for your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please enter instructions for using this application:',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'please enter instructions for contributing to this repository and application:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'please enter instructions for testing this application:',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
