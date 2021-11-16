let Math = require('../index');
var counter = {
    currentValues: function () {
      return 1;
    },
  };

describe("testing math utilities", () => {
    let pos_vals;
    let neg_vals;
    let vals;
    let sum_of_vals;
  
    
    beforeAll(()=>{
        posVal = [2,4,6,5,7,9,5,4,1,2,4,5];
        negVals = [-1,-5,-6,-8,-9,-7,-8,-4];
        vals = posVal.concat(negVals);
        sum_ofVals = vals.reduce((x,y)=> x + y , 0);
    })
    
    

    beforeEach(()=>{
        console.log(vals , sum_of_vals);
    })


    afterEach(()=>{
        console.log("done");
    })
    

    afterAll(()=>{
        pos_vals = 0;
        neg_vals = 0;
        vals = 0;
        sum_of_vals = 0
    })
    it("sum function should equal to sum of the values", () => {
        expect(Math.sum(vals)).toEqual(sum_ofVals);
    });
  
    it("positive function should equal to positive values", () => {

        expect(Math.positive(vals)).toEqual(posVals);
    });
  });

  //----------------------------------------------------------------------------------------------------------------

function sumOfValues() {
    return counter.currentValues();
}
   
describe("mock and spy", function () {
     
     
     
    it("spying", function () {
    
      counter.currentValues = jasmine.createSpy(100);
   
      expect(sumOfValues()).toEqual(counter.currentValues());
      
      expect(counter.currentValues).toHaveBeenCalledTimes(1); 
    });
   
});
   