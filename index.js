const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require ('./lib/shapes');


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

function init() {
    inquirer.prompt(questions).then((answers) => {
        createdShape(answers);
        console.log(createdShape(answers))
    }).catch(err => {
        console.log(err)
});
};


function createdShape(answers){
    if (answers.shape === 'circle') {
        let newShape = new Circle(answers.colour, answers.textCol, answers.text)
        return newShape.render()
    } else if (answers.shape === 'triangle') {
        let newShape = new Triangle(answers.colour, answers.textCol, answers.text)
        return newShape.render()
    } else (answers.shape === 'square') 
        let newShape = new Square(answers.colour, answers.textCol, answers.text)
        return newShape.render()
}

function newShape() {
    const logo = createdShape(answers);
    fs.writeFile('logo.svg', logo), (err) =>
        err ? console.log(err) : console.log('Successfully created svg')
}


init();