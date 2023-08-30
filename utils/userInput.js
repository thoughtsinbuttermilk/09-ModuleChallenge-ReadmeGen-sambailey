// TODOS: requirements from readme.md
// DONE: user input for project title, description, installation instructions, usage information,
// contribution guidelines, and test instructions, GitHub username, link to my GitHub profile, email address

const { default: separator } = require("inquirer/lib/objects/separator");

// DONE: find something to validate the e-mail address
// NOTE: the e-mail address really shouldn't be validated on the front end but, hey...
const emailValidator = require("email-validator");

const questions = [
  {
    // project title
    name: "title",
    message: "(required) enter the name of your project:",
    type: "input",
    // validate: title is required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the project title");
      }
      return true;
    },
  },

  {
    // project description
    name: "description",
    message: "(required) enter a description of your project:",
    type: "input",
    // validate: description is required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the project description");
      }
      return true;
    },
  },

  {
    // installation instructions
    name: "instalInstructions",
    message: "(required) enter installation instructions:",
    type: "input",
    // validate: installation instructions are required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the installation instructions");
      }
      return true;
    },
  },

  {
    // usage information
    name: "usage",
    message: "(required) enter usage instructions:",
    type: "input",
    // validate: usage instructions are required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the usage instructions");
      }
      return true;
    },
  },

  {
    // contribution guidelines
    name: "contribution",
    message: "(required) enter contribution instructions:",
    type: "input",
    // validate: contribution instructions are required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter contribution instructions");
      }
      return true;
    },
  },

  {
    // test information
    name: "testing",
    message: "(required) enter testing instructions:",
    type: "input",
    // validate: testing instructions are required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter testing instructions");
      }
      return true;
    },
  },

  {
    // license (added to project description)
    name: "license",
    message: "select a license for your project:",
    type: "list",
    choices: [
      "GNU v3",
      inquirer.Separator(),
      "MIT",
      inquirer.Separator(tick),
      "Creative Commons Zero v1.0 Universal",
      inquirer.Separator(cross),
      "Mozilla Public License 2.0",
      inquirer.Separator(),
      "The Unlicense",
    ],
  },

  {
    // github username
    name: "ghUserName",
    message: "(required) enter your github username:",
    type: "input",
    // validate: github username is required
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter your github username");
      }
      return true;
    },
  },

  {
    // github user profile
    name: "ghUserName",
    message: "(required) enter the URL of your github profile:",
    type: "input",
    // validate: github profile is required
    // not validating the url
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the URL of your github profile");
      }
      return true;
    },
  },

  {
    // e-mail address
    name: "emailAddress",
    message: "(required) enter your e-mail address:",
    type: "input",
    // validate: e-mail address is required
    // let's see if regex or something else would be good to validate the form of the address, if not the address itself.
    validate: emailValidator,
  },
];

module.exports =  questions;