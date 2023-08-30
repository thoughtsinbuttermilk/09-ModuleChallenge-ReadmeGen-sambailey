// TODOS: requirements from readme.md
// when I enter my project title, then this is displayed as the title of the README
// when I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// when I choose a license for my application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// when I enter my GitHub username, then this is added to the section of the README entitled Questions, with a link to my GitHub profile
// when I enter my email address, then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// when I click on the links in the Table of Contents

const questions = [
    {
        // project title
        name: 'title',
        message: '(required) enter the name of your project:',
        type: 'input',
        // validate: title is required
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n please enter your project's title");
            }
            return true;
        }
    },

    // project description

    // installation instructions

    // usage information

    // contribution guidelines

    // test information
    
    // license choice

    // license badge (added to project description)

    // external link to license

    // github username

    // email address

    // alternate contact information
]