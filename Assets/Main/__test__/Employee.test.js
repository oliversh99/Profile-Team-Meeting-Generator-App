// to import the class from Employee.js to this folder
const Employee = require('../lib/Employee') 

describe("forEmployeeClass", () => {
    
      it("should creat an object", () => {
  
  
        const employee = new Employee();
  
        expect( typeof (employee)).toEqual('object');
    
    })})