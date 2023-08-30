// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// TODO: learnings, VSCode extensions: Markdown All in One, TODO, Regex previewer, polacode, peacock, better comments, code spell checker, etc

function markdownTemplate(data) {
  //console.log('logging from markdownDynamo.js @ line 17' + generateMarkdown.data)
  return
  `
  # ${data.title}
  
  ${data.description}
  
  ${data.licenseBadge}
    
  ## contents
  
  1. [about this project](#about%20this%20project)
    1. [user story](#user%20story)
    2. [acceptance criteria](#acceptance%20criteria)
    3. [problems solved](#problems%solved)
    
  2. [installation](#installation)
  
  3. [usage](#usage)

  4. [walk through video](walk%20through%video)
   
  5. [testing](#testing)
  
  6. [contributions](#contributions)
  
  7. [contact](#contact)

  ## about  

  ### user story  

  ### acceptance criteria  

  ### problems solved  
  
  ## usage  
  
  ${usage}  
  
  ## walk through video

  ![]()

  ## testing  
  
  ${testing}
  
  ## contributions  
  
  ${contributions}  
  
  ## contact  
  
  ${contact}  

  <details>
  <summary>click to expand for a summary of the topics learned while working on this assignment</summary>
  
  ### topics learned  
  
  ${learnings}  

  </details>
  
`
;
}

module.exports = markdownTemplate;