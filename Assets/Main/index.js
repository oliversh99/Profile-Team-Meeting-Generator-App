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
            <div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${employee.name}</h3></div>
            <div class="col-12"><h4><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.officeNumber}</p>
            </div>
        </div>
     </div>`
           }else if (employee.getRole()==='Intern' ){
               return`
               <div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${employee.name}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> ${employee.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.school}</p>
            </div>
        </div>
     </div>`
           }else if (employee.getRole()==='Engineer' ){
               return `<div class="col-2">
               <div class="row card">
                   <div class="col-12"><h3>${employee.name}</h3></div>
                   <div class="col-12"><h4><i class="fas fa-glasses"></i> ${employee.getRole()}</h4></div>
               </div>
               <div class="row info">
                   <div class="col-12">
                   <p>ID: ${employee.id}</p>
                   <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                   <p>School: ${employee.githup}</p>
                   </div>
               </div>
            </div>`
           }
        })
 
{/*<div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${employee.name}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> ${employee.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.officeNumber}</p>
            </div>
        </div>
     </div>
    
    <div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${employee.name}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> ${employee.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.school}</p>
            </div>
        </div>
     </div>
    
    <div class="col-2">
        <div class="row card">
            <div class="col-12"><h3>${employee.name}</h3></div>
            <div class="col-12"><h4><i class="fas fa-user-graduate"></i> ${employee.getRole()}</h4></div>
        </div>
        <div class="row info">
            <div class="col-12">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.githup}</p>
            </div>
        </div>
     </div>

 <div class="card" style="width: 18rem;">
            <div class ="card-body p-3 mb-2 bg-primary text-white text-center"> <h1 class="card-title">${employee.name}</h1>
            <p class="card-text">${employee.getRole()} </p></div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID:${employee.id} </li>
            <li class="list-group-item"> Email:${employee.email} </li>
            <li class="list-group-item"> Office Number:${employee.officeNumber} </li>
            </ul>
            </div>


<div class="card" style="width: 18rem;">
               <div class ="card-header p-3 mb-2 bg-primary text-white text-center"><h1 class="card-title"> ${employee.name}</h1>
               <p>${employee.getRole()} </p></div>
               <ul class="list-group list-group-flush">
               <li class="list-group-item"> ID: ${employee.id} </li>
               <li class="list-group-item"> Email:${employee.email} </li>
               <li class="list-group-item"> School:${employee.school} </li>
               </ul>
               </div>


     <div class="col-2">
               <div class="row card">
               <div class ="card-body p-3 mb-2 bg-primary text-white text-center"><h1 class="card-title"> ${employee.name}</h1>
               <p>${employee.getRole()} </p></div>
               <ul class="list-group list-group-flush">
               <li class="list-group-item"> ID: ${employee.id} </li>
               <li class="list-group-item"> Email:${employee.email} </li>
               <li class="list-group-item"> GitHub:${employee.githup} </li>
               </ul>
               </div>
 */}

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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
           <link rel="preconnect" href="https://fonts.googleapis.com">
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
           <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap" rel="stylesheet">
           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"> 
           <link rel="stylesheet" href="./dist/style.css">

        </head>
        <body>
     
        <header>My Team</header>
        <main class="container">
            <div class="row d-flex justify-content-center">
            ${makeEmployeeCard()}
            </div>
            </main>

        </body>
       
        </html>   `
     return filename
    } 
   