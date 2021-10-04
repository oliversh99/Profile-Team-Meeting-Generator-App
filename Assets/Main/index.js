const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

// import here from module 
var employee = []
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
       const manager = new Manager(data.name, data.Id, data.email,data.officenumber)
       employee.push(manager)
       if(data.addmore === 'Engineer'){
           addEngineer();
        
       }else if(data.addmore === 'Intern'){
        addIntern();
       }else {
           makefile();
       }
    });
    function makefile(){
        fs.writeFile('index.html' , createHtmlPage(), (err) =>
        err ? console.log(err) : console.log('Success!'))
    }
    function addEngineer(){
        inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the the name of team Engineer?',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'what is the Id for team Engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is you email for team Engineer?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'what is the GitHub user name for Engineer?',
        },
       
        {
        type: 'list',
        name: 'addmore',
        message: 'Which type of team member would you like to add?'+'default(use arrwo keys)',
        choices: ['Engineer','Intern','I dont want add any more' ]
    },

    ]).then((data) => {
        const engineer = new Engineer(data.name, data.Id, data.email,data.officenumber)
        employee.push(engineer)
        if(data.addmore === 'Engineer'){
            addEngineer();
         
        }else if(data.addmore === 'Intern'){
         addIntern();
        }else {
            makefile();
        }
     });

    };
    // update qustion 
    function addIntern(){
        inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the the name of team Intern?',
            },
            {
                type: 'input',
                name: 'Id',
                message: 'what is the Id for team Intern?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is you email for team Intern?',
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'what school does the  Intern enroled?',
            },
           
            {
            type: 'list',
            name: 'addmore',
            message: 'Which type of team member would you like to add?'+'default(use arrwo keys)',
            choices: ['Engineer','Intern','I dont want add any more' ]
        },
    
        ]).then((data) => {
            const intern = new Intern(data.name, data.Id, data.email,data.officenumber)
            employee.push(intern)
            if(data.addmore === 'Engineer'){
                addEngineer();
             
            }else if(data.addmore === 'Intern'){
             addIntern();
            }else {
                makefile();
            }
         });
        
    };
    // test 
    function makeEmployeeCard(){
      return employee.map(employee => {
           if (employee.getRole()==='Manager'){
            return `
            <div class="card" style="width: 18rem;">
            <div class ="card-body p-3 mb-2 bg-primary text-white text-center"> <h1 class="card-title">${employee.name}</h1>
            <p class="card-text">${employee.getRole()} </p></div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID:${employee.id} </li>
            <li class="list-group-item"> Email:${employee.email} </li>
            <li class="list-group-item"> Office Number:${employee.officeNumber} </li>
            </ul>
            </div>`
           }else if (employee.getRole()==='Intern' ){
               return`
               <div class="card" style="width: 18rem;">
               <div class ="card-header p-3 mb-2 bg-primary text-white text-center"><h1 class="card-title"> ${employee.name}</h1>
               <p>${employee.getRole()} </p></div>
               <ul class="list-group list-group-flush">
               <li class="list-group-item"> ID: ${employee.id} </li>
               <li class="list-group-item"> Email:${employee.email} </li>
               <li class="list-group-item"> School:${employee.school} </li>
               </ul>
               </div>`
           }else {
               return `<div class="card" style="width: 18rem;">
               <div class ="card-body p-3 mb-2 bg-primary text-white text-center"><h1 class="card-title"> ${employee.name}</h1>
               <p>${employee.getRole()} </p></div>
               <ul class="list-group list-group-flush">
               <li class="list-group-item"> ID: ${employee.id} </li>
               <li class="list-group-item"> Email:${employee.email} </li>
               <li class="list-group-item"> GitHub:${employee.githup} </li>
               </ul>
               </div>`
           }
        })

    };
    function createHtmlPage() {
        // const dataObj = JSON.parse(data);
        const filename = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
           

        </head>
        <body>
        <div>
        <header class="bg-primary"><h2 class ="text-center">My Team</h2></header>
        </div>
        <div class='container'>
        <div class='row align-items-center'>
        <div class="col-4 d-flex flex-row justify-content-center">
      
       
                     
         ${makeEmployeeCard()}
         
         
         </div>
                      
        </div>
    </div>
       

        </body>
       
        </html>   `
     return filename
    } 
   