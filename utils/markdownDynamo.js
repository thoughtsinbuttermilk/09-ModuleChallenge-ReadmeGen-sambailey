// a switch statement was used when this project was originally submitted
// replacing that with an object literal
// function that returns the license badge and make it a clickable link for the description section
function createLicenseBadge(selectedLicense) {
  var license = {
    // use back ticks instead of quotes, the return type will be added to the generated markdown
    "GNU General Public License v3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    "MIT": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    "Creative Commons Zero v1.0 Universal": `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    "Mozilla Public License 2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    "The Unlicense": `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`,
  };
  // thanks to nikki and jason for helping me get this return working! brackets because string
  return license[selectedLicense];
}

// function that returns the license name for the license section
function getLicenseName(licenseName) {
  var license = {
    "GNU General Public License v3.0": `GNU General Public License v3.0`,
    "MIT": `MIT`,
    "Creative Commons Zero v1.0 Universal": `Creative Commons Zero v1.0 Universal`,
    "Mozilla Public License 2.0": `Mozilla Public License v2.0`,
    "The Unlicense": `Unlicense`,
  };
  return license[licenseName];
}

// function that returns the license link for the license section
function createLicenseLink(licenseLink) {
  var license = {
    "GNU General Public License v3.0": `[this link to view the details of the GNU General Public License v3.0.]((https://www.gnu.org/licenses/gpl-3.0))`,
    "MIT": `[this link to view the details of the MIT license.](https://opensource.org/licenses/MIT)`,
    "Creative Commons Zero v1.0 Universal": `[this link to view the details of the Creative Commons Zero v1.0 Universal license.](http://creativecommons.org/publicdomain/zero/1.0/)`,
    "Mozilla Public License 2.0": `[this link to view the details of the Mozilla Public License v2.0.](https://opensource.org/licenses/MPL-2.0)`,
    "The Unlicense": `[this link to view the details of the Unlicense license.](https://choosealicense.com/licenses/unlicense/)`,
  };
  return license[licenseLink];
}

// function that returns the markdown data for the generated README.md file
function generateMarkdown(data) {
  return `

# ${data.title}
    
## Description

${data.description}

${createLicenseBadge(data.license)}

# Table of Contents
1. [Installation Instructions](#installation%20instructions)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Questions](#questions)
    
## Installation Instructions

${data.instalInstructions}

## Usage 

${data.usage}

## Contributing 

${data.contribution}

<details>
<summary>Click to expand for test and licensing details</summary>

## Tests

${data.testing}

## License

The application in this repository is covered by the ${getLicenseName(data.license)} license. Use ${createLicenseLink(data.license)} 

</details>

## Questions

If you have any questions about this software, repository or want to reach out to me directly, please see my work [in GitHub](http://www.github.com/${
    data.ghUserName
  }/) or shoot me an e-mail at ${data.emailAddress}. Thank-you!

`;
}

module.exports = generateMarkdown;