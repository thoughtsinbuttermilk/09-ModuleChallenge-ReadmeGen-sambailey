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

            // need to sort this out: 'unexpected identifier' error as written
            // validate: titleInput => {
            //     if titleInput {
            //         return true;
            //     } else {
            //         console.log('please enter a title for your project')
            //     }
            // }
            
        },
        {
            type: 'input',
            name: 'description',
            default: 'describing your project helps the audience understand the intent, usage, and features available ',
            message: 'please enter a descrption for your project:',
        },
        {
            type: 'input',
            name: 'installation',
            default: 'how would a user install the application?',
            message: 'please enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            default: 'how would a customer use the application?',
            message: 'please enter instructions for using this application:',
        },
        {
            type: 'input',
            name: 'contributions',
            default: 'how would a developer contribute to this application and repository?',
            message: 'please enter instructions for contributing to this repository and application:',
        },
        {
            type: 'input',
            name: 'tests',
            default: 'describe the test framework and tests which guard against regressions',
            message: 'please enter instructions for testing this application:',
        },
        {
            type: 'list',
            name: 'license',
            default: 'choose and open source license for your project',
            message: 'please enter instructions for testing this application:',
            choices: ['MIT', 'Apache 2.0', 'GNU GPL3', 'ISC', new inquirer.Separator(), 'none']
        },
    ]);
};

// commented this code out: useful for debugging without generating readme.md file on disk
// inquirer.prompt(userInput).then((answers) => {
//     console.log('\readme information');
//     console.log(JSON.stringify(answers, null, '  '));
//   });

// TODO: Create a function to write README file
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
