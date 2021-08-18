// to import the class from Engineer.js to this folder
const Engineer = require('../lib/Engineer') 

describe("forEngineerClass", () => {
    
      it("should creat an object", () => {
  
  
        const engineer = new Engineer();
  
        expect( typeof (engineer)).toEqual('object');
    
    })})