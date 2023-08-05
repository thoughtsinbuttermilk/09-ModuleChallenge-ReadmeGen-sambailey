// DONE: Include packages needed for this application
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/28

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
            // default: 'this string will be used to set the title of your project',
            // NOTE: using default text 'breaks' the if statement that checks for input
            // TODO: write a test to check the user has imput text and re-work the if statement to test for the default string
            message: 'please enter the title of your project (required): ',
            validate (answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
            
        },
        {
            type: 'input',
            name: 'description',
            // default: 'describing your project helps the audience understand the intent, usage, and features available ',
            message: 'please enter a descrption for your project (required):',
            validate (answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            // default: 'how would a user install the application?',
            message: 'please enter installation instructions (required):',
            validate (answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            // default: 'how would a customer use the application?',
            message: 'please enter instructions for using this application (required):',
            validate (answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            default: 'cite engineers who have contributed to this repository and application',
            message: 'please enter instructions for contributing to this repository and application:',
        },
        {
            type: 'input',
            name: 'tests',
            default: 'describe the test framework and tests which guard against regressions or how to add tests',
            message: 'please enter instructions for testing this application:',
        },
        {
            type: 'list',
            name: 'uselicense',
            // default: 'choose and open source license for your project',
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
    ]);
};

// commented this code out: useful for debugging without generating readme.md file on disk
// inquirer.prompt(userInput).then((answers) => {
//     console.log('\readme information');
//     console.log(JSON.stringify(answers, null, '  '));
//   });

// DONE: Create a function to write README file
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/30
const writeMDFile = ({ name, title, description, installation, usage, contributions, tests, license}) =>
`# ${title} 

${description}  

## license  

${license}

## contents

<details>
<summary>click to expand sections</summary>

### installation  

${installation}  

### usage  

${usage}  

### tests  

${tests}

</details>

## contributions  

${contributions}  

`


// DONE: Create a function to initialize app
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/31
const init = () => {
    userInput()
        .then((answers) => writeFile('markdownDynamo.md', writeMDFile(answers)))
        .then(() => console.log('success: file written to disk'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
