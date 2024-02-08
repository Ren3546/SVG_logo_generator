//packages for creating files and prompting user questions
const inquirer = require('inquirer');
const fs = require('fs');
const createdShape = require ('./lib/createdShape')

//questions array to ask user
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter your characters for the logo (3)',
    },
    {
      type: 'input',
      name: 'textCol',
      message: 'What colour would you like your text to be?'  
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

//function to create svg file
function newShape(answers) {
    const logo = createdShape(answers);
    fs.writeFile('logo.svg', logo, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully created svg');
        }
      });
    }

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        newShape(answers);
    }).catch(err => {
        console.log(err)
});
};

init();