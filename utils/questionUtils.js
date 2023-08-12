// added requirement to be able to use Separator method; there is probably a better way, tho.
// const inquirer = require("inquirer");

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
        // NOTE: using default text 'breaks' the if statement that checks for input
        // TODO: write a test to check the user has imput text and re-work the if statement to test for the default string
        message: 'please enter the title of your project: ',
        validate(answer) {
            if (!answer) {
                return 'please enter a title for your project';
            } else {
                return true;
            }
        }

    },

    // project description (input)
    {
        type: 'input',
        name: 'description',
        // default: 'describing your project helps the audience understand the intent, usage, and features available ',
        message: 'please enter a descrption for your project: ',
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
        // default: 'how would a user install the application?',
        message: 'please enter installation instructions: ',
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
        default: 'describe the test framework and tests which guard against regressions or how to add tests',
        message: 'please enter instructions for testing this application:',
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
        default: 'cite engineers who have contributed to this repository and application',
        message: 'please enter instructions for contributing to this repository and application:',
        choices: ['yes', 'no']
    },
    {
        type: 'list',
        name: 'contributors',
        // default: 'cite engineers who have contributed to this repository and application',
        message: 'please enter instructions for contributing to this repository and application:',
        when(answers) {
            return answers.contributorsYN === 'yes'
        }
    },

    // project contact (input)
    {
        type: 'input',
        name: 'contact',
        default: 'enter your e-mail so users can contact you with questions or praise!',
        message: 'please enter your e-mail address',
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