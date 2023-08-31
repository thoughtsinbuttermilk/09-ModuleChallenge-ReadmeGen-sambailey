// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// TODO: Create a function to generate markdown for README

function createLicenseBadge(license) {
  switch (license) {
    case "GNU General Public License v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Creative Commons Zero v1.0 Universal":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "The Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default:
      return ``;
  }
}

// i used a switch statement originally
// replacing that with an object literal (because this will be good for me)
// function licenseBadge(license) {
//   var license = {
//     // use back ticks instead of quotes, the return type will be added to the generated markdown
//     GNU3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
//     creativeCommons: `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,
//     mozilla2: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
//     unLicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
//   };
//   return;
// }

function generateMarkdown(data) {
  return `

# ${data.title}
    
## Description ${data.description}
    
## License
    
${createLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;

// var licenses = licenseBadge("license");
// console.log(licenses);

// function generateMarkdown(data) {
//   //console.log('logging from markdownDynamo.js @ line 17' + generateMarkdown.data)
//   return
//   `
//   # ${data.title}

//   ${data.description}

//   ${data.licenseBadge}

//   ## contents

//   1. [about this project](#about%20this%20project)
//     1. [user story](#user%20story)
//     2. [acceptance criteria](#acceptance%20criteria)
//     3. [problems solved](#problems%solved)

//   2. [installation](#installation)

//   3. [usage](#usage)

//   4. [walk through video](walk%20through%video)

//   5. [testing](#testing)

//   6. [contributions](#contributions)

//   7. [contact](#contact)

//   ## about

//   ### user story

//   ### acceptance criteria

//   ### problems solved

//   ## usage

//   ${usage}

//   ## walk through video

//   `![]()`

//   ## testing

//   ${testing}

//   ## contributions

//   ${contributions}

//   ## contact

//   ${contact}

//   <details>
//   <summary>click to expand for a summary of the topics learned while working on this assignment</summary>

//   ### topics learned

//   ${learnings}

//   </details>

// `
// ;
//   `![]()`

//   ## testing

//   ${testing}

//   ## contributions

//   ${contributions}

//   ## contact

//   ${contact}

//   <details>
//   <summary>click to expand for a summary of the topics learned while working on this assignment</summary>

//   ### topics learned

//   ${learnings}

//   </details>

// `
// ;
//   `![]()`

//   ## testing

//   ${testing}

//   ## contributions

//   ${contributions}

//   ## contact

//   ${contact}

//   <details>
//   <summary>click to expand for a summary of the topics learned while working on this assignment</summary>

//   ### topics learned

//   ${learnings}

//   </details>

// `;
// }
