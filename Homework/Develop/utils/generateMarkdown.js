function generateMarkdown(data) {
  return `
  # ${data.title}

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

  ${data.questions}


  ---
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
  `;
}

module.exports = generateMarkdown;
