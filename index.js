const inquirer = require('inquirer');
const fs = require('fs');
const createdShape = require ('./lib/createdShape')

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter your characters for the logo (3)',
    },
    {
      type: 'input',
      name: 'colour',
      message: 'What colour would you like your logo to be? (keyword or hexadecimal)',
    },
    {
      type: 'list',
      message: 'What shape is your logo?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
  ];

function newShape(answers) {
    const logo = createdShape(answers);
    fs.writeFile('logo.svg', logo), (err) =>
        err ? console.log(err) : console.log('Successfully created svg')
}


function init() {
    inquirer.prompt(questions).then((answers) => {
        newShape(answers);
    }).catch(err => {
        console.log(err)
});
};

init();