// to import the class from Intern.js to this folder
const Intern = require('../lib/Intern') 

describe("forInternClass", () => {
    
      it("should creat an object", () => {
  
  
        const intern = new Intern();
  
        expect( typeof (intern)).toEqual('object');
    
    })})