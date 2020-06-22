function createLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


function generateMarkdown(data) {
  return `
  # ${data.title}

${createLicenseBadge(data.license)}


  ## Description 

  ${data.desc}


  ## Table of Contents (Optional)

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  ${data.inst}


  ## Usage 

  ${data.usage}
  


  ## Credits

  ${data.credits}

  



  ## License

  ${data.license}

  

  ## Badges

  ${data.badges}
  


  ## Contributing

  ${data.contri}

 

  ## Tests

  ${data.test}
  

  ## Questions

 If you have anymore questions, contact me on ${data.email}. 

 You can find my other projects at [${data.github}](https://github.com/${data.github}/).

  ---
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
  `;
}

module.exports = generateMarkdown;
