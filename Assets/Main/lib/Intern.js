const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id,email,school,) {
      super(name, id,email);
    
      this.school =school ;
    }
    getGithup(){
        return this.school;
        

    }
 getRole(){
     return 'Intern'
 }

}
// to eports this file 

module.exports = Intern
    