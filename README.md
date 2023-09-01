# 09 ModuleChallenge README generator sambailey
Northwestern Bootcamp challenge week 10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![npm](https://img.shields.io/npm/v/npm.svg?logo=npm)

# Table of Contents
- [09 ModuleChallenge README generator sambailey](#09-modulechallenge-readme-generator-sambailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Usage instructions](#usage-instructions)
  - [Testing](#testing)
  - [Video walkthrough](#video-walkthrough)
  - [Credits](#credits)

## Project description

The intent of the project is to build a simple, command line application that programmatically creates README using [markdown syntax](https://www.markdownguide.org/basic-syntax/) based on user input.

## Application functionality

Using the command line interface (`CLI`), the user of the application provides user  input which crates a professional README file for their repository. The application prompts the user to enter:

1. The Project and README's *title*

2. A *description* of the application

3. *Instructions* which guide the user to install the application

4. *Usage* instructions 

5. Instructions that outline how to *contribute* to the repository and application 

6. How to *test* the application

7. Select a *license* for the application

8. The user's *GitHub username*

9. The user's *e-mail address*

10. A *name* for the generated README.md file 

## Technology used

The application was built using [node.js, v18.17.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications, [npm inquirer, v8.2.6](https://www.npmjs.com/package/inquirer), a collection of common interactive command line user interfaces. [npm](https://www.npmjs.com/) is used to manage the open source, required packages and their dependencies.

## Usage instructions

<details>
<summary> Expand for installation, usage and generated logo details.</summary>

1. **Installation**

    *prerequisites:*
    
    [VS Code](https://code.visualstudio.com/download)

    [required packages, link to package.json in github repository](https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/blob/5d08db35866826c4c5044150705a5c62b6f0c558/package.json)

   • Clone the repository: `git clone git@github.com:thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey.git`

   •  Install and launch VS Code

   • In the `terminal`, use `npm install` to install required packages

2. **Usage, CLI**

    In the directory where the repository was cloned, and `npm install` was run, start the application by entering `node index.js` in the `terminal` and enter the information prompted by the application

</details>

## Testing

The 1.0 version of the application is not guarded by unit or functional tests.

## Video walkthrough

Please see [this video](https://drive.google.com/file/d/1rmdlNwNabTUwBzUgP8aXcIY5WuHdvCqQ/view?usp=drive_link) which will show you how to install, start and use the application.

Please see [this video](https://drive.google.com/file/d/1qv9lWc-AmaT57kAE2BnffZn9tywZJqob/view?usp=drive_link) for a demonstration of the application functionality and creation of the generated README file.

Please see [demonstrationREADME.md](https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/blob/80461d95f3c5d4844822f0f87fb68bf88074b4b9/dist/demonstrationREADME.md), the README file generated in the video walkthrough.

## Credits

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) and  Jason Thekkekara (a.k.a JSON), for helping me work out a problem I had with the syntax for a return statement (see comment in [markdownDynamo.js](https://github.com/thoughtsinbuttermilk/09-ModuleChallenge-ReadmeGen-sambailey/blob/1712ba4a81421a63713c82ae3432f6cac65042c6/utils/markdownDynamo.js) And, as always, Dustin, our student success manager, and the fine and thoughtful crew of graders for your support and patient approach as I learn.

*Thank-you.*