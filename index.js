// TODO: Include packages needed for this application

// include required filesystem (fs) module, export promises module
const { writeFile } = require('fs').promises;

// include required inquirer modedule
const inquirer = require('inquirer');

// include required markdownDynamo js utilities
const mdDynamo = require('./utils/markdownDynamo');

// greeting
console.log('Hello. I am the README Dynamo. Let me help you make a professional README.md file')

// TODO: Create an array of questions for user input
const userInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            default: 'this string will be used to set the title of your project',
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

// inquirer.prompt(userInput).then((answers) => {
//     console.log('\readme information');
//     console.log(JSON.stringify(answers, null, '  '));
//   });

// TODO: Create a function to write README file
const writeMDFile = ({ name, title, description, installation, usage, contributions, tests }) =>
    `
this is a test
the project title is ${title}
the project description is ${description}
`

// TODO: Create a function to initialize app
const init = () => {
    userInput()
        .then((answers) => writeFile('index.html', writeMDFile(answers)))
        .then(() => console.log('success: file written to disk'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
