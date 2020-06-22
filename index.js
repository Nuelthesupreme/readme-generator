const fs = require('fs');
const inq = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
   
    {
        type: "input",
        name: "github",
        message: "What is your GitHub?",
    },
    {
        type: "input",
        name: "email",
        message: "what is you email adress?",
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the the project?',
        default: 'Project title',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Describe your project with good details?',
    },
    {
        type: 'input',
        name: 'inst',
        message: 'Describe the installation process of your app?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use the app?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide a list of colaborators involved in the project?',
    },
    {
        type: 'list',
        name: 'license',
        message:  "What license is your project using?",
        choices: [
          "MIT",
          "GPL 3.0",
          "None"
        ],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What should the user know about making contributions to the repo?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test for the application',
        default: 'npm test'
    },
   
    
];

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, data, () => {})
}

function init() {
    inq.prompt(questions) // ask qyestions
        .then(generateMarkdown) // use answers to make md string
        .then(mdString => writeToFile('README', mdString)) // use md string to make md file
        .catch(console.log)
}

init();
