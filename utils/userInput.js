// required package
const inquirer = require("inquirer");

// prompt user for README information
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
    message: "(required) select a license for your project:",
    type: "list",
    choices: [
      "GNU General Public License v3.0",
      // flair: using separators
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "Creative Commons Zero v1.0 Universal",
      new inquirer.Separator(),
      "Mozilla Public License 2.0",
      new inquirer.Separator(),
      "The Unlicense",
      new inquirer.Separator(),
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
    // don't validate e-mail addresses on the front-end: IRL, you would send an email with a code or link that the user would need to use or visit
    // just validate that something has been input
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter your e-mail address");
      }
      return true;
    },
  },

  {
    name: "fileName",
    message: "(required) enter the name of the generated README file:",
    type: "input",
    // validate: requires user provided a name for the generated README file
    validate: (answer) => {
      if (answer === "") {
        return console.log("\n please enter the filename");
      }
      return true;
    },
  },
];

module.exports = questions;
