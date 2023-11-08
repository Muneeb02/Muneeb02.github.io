// let objArray = [{jewel : "diamond", karet: 15 }, { jewel: 'ruby', karet: 12 }, { jewel: 'ruby', karet: 2 }  ]

// function sumRubyKarets(objArray){
//    let temparr= [];
//     for (let val of objArray) {
//         let tempArr =[];
//         for(let prop of val){
       
//             if(prop == "ruby"){
//             console.log(prop);
//             tempArr[objArray[prop]]++;
//         }

//          }
//     }
//     return finalArray.push(temparr);
// }

// let finalArray = [];
// for (let ele of objArray) {
//     let tempObj = {};
//     for (let key in ele) {
//         if (key != 'a'){
//             tempObj[key]=ele[key];
//         }
//    }
//    finalArray.push(tempObj);
// }
// return finalArray;

// console.log("Expect { ruby : 14 } ",sumRubyKarets(objArray)); 


// function findPopular(array){
//     let tempArr = []; 
//     let newarray =[];
//     Count=0;
    
//     for (let i=0; i<array.length; i++) {
//             newarray[i]= array[i];
//     }      
  
//     for(let j =1; j<array.length;j++){
//         for(let k=0; k<=array.length; k++){
//             if(array[j] == array[k]){
//                 Count++;
//             }
//         }

//         if(Count>=2){
//             tempArr.push(array[i]);
//         }
//     }

//     return tempArr;

// }




// // console.log("Expect [10]", findPopular([10, 3, 2, 10])) 

// // console.log("Expect [ 'apple', 'pear' ]", findPopular(["apple", "apple", "pear", "pear", "grapes",'pear','apple'])) 







   // goodone /////
function sumRubyKarets(objArray) {
    let sum = 0;
  
    for (const obj of objArray) {
      if (obj.jewel === 'ruby') {
        sum += obj.karet;
      }
    }
  
    return { ruby: sum };
  }
  
  let objArray = [
    { jewel: 'diamond', karet: 15 },
    { jewel: 'ruby', karet: 12 },
    { jewel: 'ruby', karet: 2 }
  ];
  
//   console.log("Expect { ruby: 14 }", sumRubyKarets(objArray));



 / goodone  //////

  function findPopular(arr) {
    if (arr.length === 0) {
      return [];
    }
 
//     // Create an object to store the counts of each element in the array.
    const countMap = {};
  
    // Iterate through the array and count the occurrences of each element.
    for (const element of arr) {
      if (countMap[element]) {
        countMap[element]++;
      } else {
        countMap[element] = 1;
      }
    }
  
    // Find the maximum count.
    let maxCount = 0;
    for (const element in countMap) {
      if (countMap[element] > maxCount) {
        maxCount = countMap[element];
      }
    }
  
    // Find the elements that have the maximum count.
    const popularElements = [];
    for (const element in countMap) {
      if (countMap[element] === maxCount) {
        popularElements.push(element);
      }
    }
  
    return popularElements;
  }

 // console.log("Expect [10]", findPopular([10, 3, 2, 10])) 

 // console.log("Expect [ 'apple', 'pear' ]", findPopular(["apple", "apple", "pear", "pear", "grapes",'pear','apple'])) 

 




// //   //  goodone /// / 

function leader(arr) {
    const leaders = [];
    let maxRit = arr[arr.length - 1]; 
  
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] >= maxRit) {
        leaders.unshift(arr[i]); 
        maxRit = arr[i]; 
      }
    }
  
    return leaders;
  }
  
  console.log("Expect [ 10, 8, 3 ]", leader([1, 10, 4, 8, 3]));
  console.log("Expect [ 12, 10, 9 ]", leader([12, 10, 4, 8, 9]));

  
  
  


// function pattern(str){
//     for(let i=0; i<str.length; i++){
//        // console.log(str[i]) ;
//         for(let j=0; j<i+1; j++){
            
//            // console.log(" ") ;
//             console.log(str[i]) ;

//         }
//     }
// }

// pattern("Hello");


              //          u
              //         n  n
              //        i    i
              //       v      v
              //      e        e
              //     r          r
              //    s            s
              //   i              i
              //  t                t
              // y                  y  

 




// function findPopular(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
 
//     let countMap = {};
 
//        for (let element of arr) {
//       if (countMap[element]) {
//         countMap[element]++;
//       } else {
//         countMap[element] = 1;
//       }
//     }
  
    
//     let maxCount = 0;
//     for (let element in countMap) {
//       if (countMap[element] > maxCount) {
//         maxCount = countMap[element];
//       }
//     }
  
    
//     let popularElements = [];
//     for (let element in countMap) {
//       if (countMap[element] === maxCount) {
//         popularElements.push(element);
//       }
//     }
  
//     return popularElements;
//   }


//   console.log("Expect [10]", findPopular([10, 3, 2, 10])) 

// console.log("Expect [ 'apple', 'pear' ]", findPopular(["apple", "apple", "pear", "pear", "grapes",'pear','apple'])) 