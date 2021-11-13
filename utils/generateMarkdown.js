// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(title, license) {
  if (license === "no"){
    return ``
  } else {return `# ${title}
  ![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

Year = new Date().getFullYear;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "BSD") {
    return `Information about the BSD license. https://choosealicense.com/licenses/bsd-2-clause/# `
  } else if (license === "GNU") {
    return `Information about the GNU license. https://choosealicense.com/licenses/agpl-3.0/`
  } else if (license === "MIT") {
    return `Information about the MIT license. https://choosealicense.com/licenses/mit/`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
 
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.title, data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Project Image
  ![Screenshot of Project](${data.screenshot})
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed under ${data.license} license.

  ## License Link
  ${renderLicenseLink(data.license)}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
