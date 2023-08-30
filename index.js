// DONE: Include packages needed for this application
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/28
// documentation: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api
const fs = require('fs').promises;
// include required inquirer module
const inquirer = require('inquirer');

// CONNECT UTILITIES
const generateMarkdown = require('./utils/markdownDynamo');
// TODO: remove the commented line below after you add the implementation; delete file in utils directory
// const questions = require('./utils/questionUtils').questions;
const licenses = require('./utils/licenseUtils');

// TODO: Create an array of questions for user input
const questions = [

    // repository owner (input)
    {
        type: 'input',
        name: 'owner',
        default: 'your name will be used as the name of the repository owner',
        message: 'please enter the your first and last name: ',
        validate(answer) {
            if (!answer) {
                return 'please enter your first and last name';
            } else {
                return true;
            }
        }

    },

    // project title (input)
    {
        type: 'input',
        name: 'title',
        // default: 'this string will be used to set the title of your project',
        // NOTE: using default text would me I need to change the validate function
        // TODO: write a test to check the user has imput text and re-work the if statement to test for the default string
        message: 'please enter the title of your project: ',
        // this input is required, validate the user entered text
        validate(answer) {
            if (!answer) {
                return 'required: please enter a title for your project';
            } else {
                return true;
            }
        }

    },

    // project description (input)
    {
        type: 'input',
        name: 'description',
        message: 'required: please enter a description for your project: ',
        validate(answer) {
            if (!answer) {
                return 'please enter a title for your project';
            } else {
                return true;
            }
        }
    },

    // project license (conditional)
    {
        type: 'list',
        name: 'uselicense',
        default: 'choose and open source license for your project',
        message: 'would you like to add a license to this repository?:',
        choices: ['yes', 'no']
    },
    {
        type: 'list',
        name: 'license',
        default: 'choose and open source license for your project',
        message: 'please enter instructions for testing this application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL3', 'ISC', new inquirer.Separator(), 'none'],
        when(answers) {
            return answers.uselicense === 'yes'
        }
    },

    // project installation (input)
    {
        type: 'input',
        name: 'installation',
        message: 'required: please enter installation instructions: ',
        validate(answer) {
            if (!answer) {
                return 'please enter a title for your project';
            } else {
                return true;
            }
        }
    },

    // project usage (input)
    {
        type: 'input',
        name: 'usage',
        // default: 'how would a customer use the application?',
        message: 'please enter instructions for using this application: ',
        validate(answer) {
            if (!answer) {
                return 'please enter a title for your project';
            } else {
                return true;
            }
        }
    },

    // project tests (input)
    {
        type: 'input',
        name: 'tests',
        message: 'required: please enter instructions for testing this application:',
        validate(answer) {
            if (!answer) {
                return 'please enter information about how the application is tested'
            } else {
                return true;
            }
        }
    },

    // project contributions (list)
    {
        type: 'list',
        name: 'contributionsYN',
        default: 'cite engineers or colleagues who have contributed to this repository and application',
        message: 'please enter instructions for contributing to this repository and application:',
        choices: ['yes', 'no']
    },
    {
        type: 'list',
        name: 'contributors',
        message: 'reequired: please enter instructions for contributing to this repository and application:',
        when(answers) {
            return answers.contributorsYN === 'yes'
        }
    },

    // project contact (input)
    {
        type: 'input',
        name: 'contact',
        message: 'required please enter your e-mail address',
        validate: (answer) => {
            // regex is a dark art: swiped from somewhere on the darkweb after trying to write the expression myself...sheesh
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
                return 'please provide a valid email address'
            }
            return true
        }
    },
];

module.exports = {
    questions: questions,
};


// DONE: Create a function to write README file
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/30
// note: TOC links do not work when details is not expanded; rework this after you add the screen cap and recording

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('hello, there. \n README Dynamo here. your README.md file has been generated successfully (root directory). \n you are welcome.');
    })
};

// DONE: Create a function to initialize app
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/31

    // greeting
    // console.log('Hello. I am the README Dynamo. I will help you make a professional readmeDynamo.md file')
    // console.log((questions));

    function init() {

        console.log(`
        =================
        Welcome to the ReadMe Generator! 
        Answer the following question prompts to feed information to the generator.
        =================
        `);

        inquirer.prompt(questions)
            .then(readmeData => {
                // console.log(readmeData);
                writeToFile("./README.md", generateMarkdown(readmeData))
            })
    };

    // Function call to initialize app
    init();