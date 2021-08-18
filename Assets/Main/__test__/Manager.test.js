// to import the class from Engineer.js to this folder this how to write simple test 
const Manager = require('../lib/Manager') 

describe("forEngineerClass", () => {
    
      it("should creat an object", () => {
  
  
        const manager = new Manager();
  
        expect( typeof (manager)).toEqual('object');
    
    })})