// DONE: Include packages needed for this application
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/28

// include required filesystem (fs) module, export promises module
const { writeFile } = require('fs').promises;

// include required inquirer modedule
const inquirer = require('inquirer');

// include required markdownDynamo js utilities
const mdDynamo = require('./utils/markdownDynamo');

// TODO: Create an array of questions for user input
const userInput = () => {
    return inquirer.prompt([
        
        // project title
        {
            type: 'input',
            name: 'title',
            // default: 'this string will be used to set the title of your project',
            // NOTE: using default text 'breaks' the if statement that checks for input
            // TODO: write a test to check the user has imput text and re-work the if statement to test for the default string
            message: 'please enter the title of your project (required): ',
            validate(answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }

        },
        
        // project description
        {
            type: 'input',
            name: 'description',
            // default: 'describing your project helps the audience understand the intent, usage, and features available ',
            message: 'please enter a descrption for your project (required):',
            validate(answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },
        
        // project license: conditional
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

        // project installation
        {
            type: 'input',
            name: 'installation',
            // default: 'how would a user install the application?',
            message: 'please enter installation instructions (required):',
            validate(answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },

        // project usage
        {
            type: 'input',
            name: 'usage',
            // default: 'how would a customer use the application?',
            message: 'please enter instructions for using this application (required):',
            validate(answer) {
                if (!answer) {
                    return 'please enter a title for your project';
                } else {
                    return true;
                }
            }
        },

        // project tests
        {
            type: 'input',
            name: 'tests',
            default: 'describe the test framework and tests which guard against regressions or how to add tests',
            message: 'please enter instructions for testing this application:',
        },

        // project contributions
        {
            type: 'list',
            name: 'contributionsYN',
            default: 'cite engineers who have contributed to this repository and application',
            message: 'please enter instructions for contributing to this repository and application:',
            choices: ['yes', 'no']
        },
        {
            type: 'list',
            name: 'contributors',
            default: 'cite engineers who have contributed to this repository and application',
            message: 'please enter instructions for contributing to this repository and application:',
            when(answers) {
                return answers.contributorsYN === 'yes'
            }
        },

        // project contact
        {
            type: 'input',
            name: 'contact',
            default: 'enter your e-mail so users can contact you with questions or praise!',
            message: 'please enter your e-mail addess:',
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
// note: TOC links do not work when details is not expanded; rework this after you add the screen cap and recording
const writeMDFile = ({ title, description, license, installation, usage, testing, contributions, contact }) =>
    `# ${title} 

${description}  

## license  

${license}

## contents
- [installation](#installation)
- [usage](#usage)
- [testing](#testing)
- [contributions](#contributions)
- [contact](#contact)

<details>
<summary>click to expand for installation, usage and testing information</summary>

### installation  

${installation}  

### usage  

${usage}  

### testing  

${testing}

</details>

## contributions  

${contributions}  

## contact  

${contact}  

`


// DONE: Create a function to initialize app
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/31
const init = () => {

    // greeting
    console.log('Hello. I am the README Dynamo. I will help you make a professional readmeDynamo.md file')

    userInput()
        .then((answers) => writeFile('markdownDynamo.md', writeMDFile(answers)))
        .then(() => console.log('success: file written to disk'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
