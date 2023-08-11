// DONE: Include packages needed for this application
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/28
// CONNECT REQUIRED PACKAGES
// include required filesystem (fs) module, export promises module
// documentation: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api
const fs = require('fs').promises;
// include required inquirer module
const inquirer = require('inquirer');
const util = require('util');

// CONNECT UTILITIES
// include required markdownDynamo js utilities
const generateMarkdown = require('./utils/markdownDynamo');
const questions = require('./utils/questionUtils').questions;
const licenses = require('./utils/licenseUtils');
// fix for 'ReferenceError: writeFileAsync is not defined'
// const writeFileAsync = util.promisify(fs.writeFile);
const writeFileAsync = (fs.writeFile);


// DONE: Create a function to write README file
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/30
// note: TOC links do not work when details is not expanded; rework this after you add the screen cap and recording

// DONE: Create a function to initialize app
// closed issue: https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/issues/31
async function init () {

    // greeting
    console.log('Hello. I am the README Dynamo. I will help you make a professional readmeDynamo.md file')
    // console.log((questions));

    try {
        const answers = await inquirer.prompt(questions);
        // answers.licenses = licenses;
        const readMeData = generateMarkdown(answers);
        console.log('logging from index.js line 36: ' + readMeData);
        // await writeFileAsync('generated-README.md', readMeData);
    } catch (err) {
        throw err;
    }
    // userInput()
    //     .then((answers) => writeFile('markdownDynamo.md', writeMDFile(answers)))
    //     .then(() => console.log('success: file written to disk'))
    //     .catch((err) => console.error(err));
}

// Function call to initialize app
init();