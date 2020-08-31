const myMap = require('./main');
const myFilter = require('./main');
let data=[1,2,3];

// beforeEach(() => {
//   test("the input is correct", () =>{
//     expect(typeof data).not.toBe('number');
//     expect(typeof data).not.toBe('string');
//   });

// }

test("make sure that data is not falsy" , () => {
    expect(data).toBeTruthy();
  });

test("map() should return an array with the same number of elements", () => {
    const result = myMap(data, x => x + 1);
    expect(result.length).toEqual(data.length);
  });

test("the functionality of the function is working right (just for numbers)", () => {
    const result1 = myMap(data, x => x + 1);
    expect(result1[0]).toEqual(2);
    expect(result1[1]).toEqual(3);
    expect(result1[2]).toEqual(4);
  });  
   
  test ("filter, should return the elements that passed the callback condition", () => {
    
    const expected = myFilter(data, x=> x>1);
    expect(data).toEqual(
      expect.arrayContaining(expected)
    );
  });
 