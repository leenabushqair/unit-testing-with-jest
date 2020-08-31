function myMap(array, fn) {
  if(!fn){
    return "you should enter a callback function";
  }
  else {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const newElement = fn(array[i]);
      newArray.push(newElement);
    }
    return newArray;
  }
}

function myFilter(array, fn) {
  if(!fn){
    return "you should enter a callback function";
  }
  else {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const shouldKeep = fn(element);
      if (shouldKeep) filteredArray.push(element);
    }
    return filteredArray;
  }
  }

  function every(array, fn) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      result = fn(el);
      if (!result) break; // need to stop if an element fails
    }
    return result;
  }
  
  function some(array, fn) {
    let result = false;
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      result = fn(el);
      if (result) break; 
    }
    return result;
  }
  
  function find(array, fn) {
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      const match = fn(el);
      if (match) {
        return el;
      } else {
        return undefined;
      }
    }
  }
//  let data=[1,2];
//  result1 = myMap(data, x => x + 2);
//  console.log(result1);
//  result2 = myFilter(data, x =>x>1);
//  console.log(result2);
module.exports= myMap, myFilter;
