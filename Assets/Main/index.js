const inquirer = require('inquirer');
const fs = require('fs');

// import here from module 
inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the the name of team manager?',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'what is the Id for team manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is you email for team manager?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'what is the office numer for manager?',
        },
       
        {
        type: 'list',
        name: 'addmore',
        message: 'Which type of team member would you like to add?'+'default(use arrwo keys)',
        choices: ['Engineer','Intern','I dont want add any more' ]
    },

    ])
    .then((data) => {
        fs.writeFile('index.html' , createHtmlPage(JSON.stringify(data)), (err) =>
            err ? console.log(err) : console.log('Success!'))
    });
    // test 
    function createHtmlPage(data) {
        const dataObj = JSON.parse(data);
        const filename = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1> ${dataObj.name} </h1>
            <p> ${dataObj.Id} </p>
            <p>${dataObj.email} </p>
            <p>${dataObj.officenumber} </p>
            <p>${dataObj.addmore} </p>
        </body>
        </html>   `
     return filename
    } 