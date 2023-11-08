array = [{name:"Ram", age: 20}, {name:"ahmed", age: 30}]

///// filter with age >20

function filterdArray(array){
   let newArr = array.filter(function(val, indx, arr){

        return val.age >20;
    });

    return newArr;
}

//console.log(filterdArray(array));


///////// name with "a"

// function filterdArrayName(array){
//     let newArr = array.filter(function(val, indx, arr){
 
//          return val.name.indexOf("a");
//          //return val.name.includes("a")
//      });
 
//      return newArr;
//  }
 
//  console.log(filterdArrayName(array));



 //  reduce without lambda
 let arr3 = [12,34,13];
 function reducedArr(array4){
    let sum1 = array4.reduce(function(acc, val, indx, array) {  // no mention of function
        //console.log(acc, val);
            return acc+val;
    },0) ;

    return sum1;
 }

 console.log(reducedArr(arr3));


 ///////  with lambda   ///////
 function reducedArr(array4){
    let sum1 = array4.reduce((acc, val, indx, array) => { 
        //console.log(acc, val);
            return acc+val;
    },0) ;

    return sum1;
 }

 console.log(reducedArr(arr3));


 //////////////// another way  //////////
 const numbers = [1, 2, 3, 4, 5];

// Using the reduce method to sum the array elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output will be 15




//////////////////////////// another way without lambda  /////////

const numbers2 = [1, 2, 3, 4, 5];

function sumArrayElements(accumulator, currentValue) {
  return accumulator + currentValue;
}

const sum2 = numbers2.reduce(sumArrayElements, 0);

console.log(sum2); // Output will be 15





