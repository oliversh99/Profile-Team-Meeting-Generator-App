const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id,email,githup) {
      super(name, id,email);
    
      this.githup = githup ;
    }
    getGithup(){
        return this.githup;
        

    }
 getRole(){
     return 'Engineer'
 }

}
// to eports this file 

module.exports = Engineer
    