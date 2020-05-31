const fs = require('fs');
const inq = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the the project?',
        default: 'Project title',
    },
    {
        type: 'editor',
        name: 'desc',
        message: 'Describe your project with good details?',
    },
    {
        type: 'editor',
        name: 'inst',
        message: 'Describe the installation process of your app?',
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Provide instructions on how to use the app including screenshots if needed?',
    },
    {
        type: 'editor',
        name: 'credits',
        message: 'Provide a list of colaborators involved in the project?',
    },
    {
        type: 'editor',
        name: 'license',
        message:  "What license is your project using?",
        choices: [
          "mit",
          "lgpl-3.0",
          "mpl-2.0",
          "agpl-3.0",
          "unlicense",
          "isc",
          "apache-2.0",
          "gpl-3.0",
        ],
    },
    {
        type: "confirm",
        name: "badges",
        message: "Would you like to add a badge for this license?",
    },
    {
        type: 'editor',
        name: 'contri',
        message: 'Please follow the steps for contributions',
    },
    {
        type: 'editor',
        name: 'test',
        message: 'Test for the application',
    },
    {
        type: 'editor',
        name: 'questions',
        message: 'Some of the commonly asked questions and their answers?',
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
