
// 6. Write a function findLongestWord() that takes an array
// of words and returns the length of the longest one.


let stringArray = ["this", "is", "how", "university", "goodlife", "chips", "university"];

function findLongestWord(stringArray){
    let str = '';
    let max=0;
    for (let st of stringArray) {
       // console.log(st.length);

       if(st.length> max){
        max=st.length;
        str=st;
       }

    }
    return "word is: "+ str + " lenghtis : " + max;
}

//console.log(findLongestWord(stringArray));



// 7. Write a function filterLongWords() that takes an array of words 
//and an integer i and returns the array of words that are longer than i. 

function filterLongWords(stringArray, num){
    let longArray = [];
    let len = 0;

    for (let st of stringArray) {
        // console.log(st.length);
 
        if(st.length > num){
         //len=st.length;
         longArray.push(st);
        }
 
     }
     return "words are: "+ longArray;

}

//console.log(filterLongWords(stringArray ,  3));


//  7. Implement indexOf, lastIndexOf, includes, split using for loops without 
// built-in functions for strings and arrays.

//indexOf

function getIndexOf(stringArray, strg){
        let inx= 0;
        for(let i=0; i<stringArray.length; i++){
            if(stringArray[i] === strg){
                inx = i;
                break;
            }
        }

        return inx;
}

//console.log(getIndexOf(stringArray, "university"));


//lastIndexOf

function getlastIndexOf(stringArray, strg){
    let inx= 0;
    for(let i=0; i<stringArray.length; i++){
        if(stringArray[i] === strg){
            inx = i;
            
        }
    }

    return inx;
}

//console.log(getlastIndexOf(stringArray, "university"));

// Find the array of Odd/ Even Number

let arr3 = [1,2,1,2,3,4,5,7,5,8,9,31,12,20];

function getOddArray(arr3){
    let tempArr = [];
    for (let val of arr3) {
        if(val% 2 != 0){
            tempArr.push(val);
        }
    }

    return tempArr;
}

//console.log(getOddArray(arr3));


// even Number
function getEvenArray(arr3){
    let tempArr = [];
    for (let val of arr3) {
        if(val% 2 == 0){
            tempArr.push(val);
        }
    }

    return tempArr;
}

//console.log(getEvenArray(arr3));


// array number divisile by 4

function getDivByFourArray(arr3){
    let tempArr = [];
    for (let val of arr3) {
        if(val%4 === 0){
            tempArr.push(val);
        }
    }

    return tempArr;
}

//console.log(getDivByFourArray(arr3));


//Calculate Sum of all Odd/Even/Numbers divisible by 4

function getSumOfOdd(arr3){
 let sum=0;
 for (const val of arr3) {
    if(val%2==0){
        sum+=val;
    }
 }

 return sum;
}

//console.log(getSumOfOdd(arr3));

// unique numbers



function getUniqueNum(arr3){
    let uniqueArr=[];
    //let counter=1;
    for (let i=0; i<arr3.length; i++) {
        let isUnique = true;
       for (let j=0; j<uniqueArr.length; j++) {
            if(arr3[i] === uniqueArr[j]){
                isUnique = false;
            }
       }

       if(isUnique){
            uniqueArr.push(arr3[i]);
       }
    }
   
    return uniqueArr;
   }
   
   //console.log(getUniqueNum(arr3));



// tyoe of array
   function getTypeOfArray(arr){
       return arr.map(item => typeof item);
   }

  // console.log(getTypeOfArray([50,"apple",{a:1}]));



// destructure array

function destructureArray(arr4){
    let result1 = {};
    for(let i=0; i<arr4.length; i++){
        let types = typeof arr4[i];
        result1[`${types}${i}`] = arr4[i];
        
    }
   return result1;
}

//console.log(destructureArray([50, "apple", { a: 1 }]));




function stringToArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }
  
  const inputString = "Hello, World!";
  const stringArray1 = stringToArray(inputString);
  //console.log(stringArray1);





  /////////////////////////////////////////////////// practice object and array//////////////////////////////////
  
  let a = {};
let b = { a: 1, b: 2, c: "apple", d: ["apple", 'Pear'], name: 'wap', age: 30 };
//console.log(a,b);

//update
//console.log(b.c);
b.a = b.a + 2;
b.d.push('grapes');
//console.log(b.a,b.d);

//insert
b.e = "Earth";
 //console.log(b);

//delete
delete b.a;
//console.log(b);

//update to different type
b.b = ['newarray'];
 //console.log(b);

//Read property by variable name
//  console.log(b.name);
let propName = 'name';
// console.log(b[propName])

// let tempArray = [];
// for(let key in b){
// console.log(key, b[key]);
//     tempArray.push(b[key])
// }
// console.log(tempArray)

//Inverse key becomes the value and vlaue becomes the key in newObj array from simplrObj
// let simpleObj ={name:'wap',age:30,skill:'javascript'};
// let newObj = {};
// for(let key in simpleObj){
//     newObj[simpleObj[key]]=key;
// }
// console.log(newObj);

// Collect names
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let nameArray = [];
// for(let ele of objArray){
//     console.log(ele);
//     nameArray.push(ele.name);
// }
// console.log(nameArray);

//Find the course that has greater id 
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let maxCourseId=0;
// let maxCourseObj ;
// for(let ele of objArray){
//     // console.log(ele);
//     if(maxCourseId<ele.id){
//         maxCourseId=ele.id;
//         maxCourseObj = ele;
//     }
// }
// console.log(maxCourseObj);



// console.log(typeof {a:1,b:2});
// console.log(typeof [10,20]);

// let arr1 = [3, 4];
// let arr2 = arr1;
// arr1.push(9);
// let arr2 = [];
// for(let ele of arr1){
//     arr2.push(ele);
// }
// let arr2 = [...arr1];

// console.log(arr1,arr2);
// arr2.push(9);
// console.log(arr1,arr2)
// console.log(arr1,arr2);

// let num1= 10;
// let num2 = num1;
// num2=num2+1;
// console.log(num1,num2);

// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}} 

let obj = { a: 1, b: 2, c: [10, 20], d: { x: 1, y: 2 } }
//[a1,b2]
function convertobjtoArr(obj) {
    let array = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            let str = '';
            for (let ele of obj[key]) {
                str += ele;
            }
            console.log(str)
            array.push(key + str);
        } else if (typeof obj[key] == 'object') {
            let objValue = obj[key];
            for (let key1 in objValue) {
                array.push(key + key1 + objValue[key1])
            }
        }
        else
            array.push(key + obj[key]);
    }
    return array;
}
// console.log(convertobjtoArr(obj));

// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}


function destructureArray(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[typeof array[i] + i] = array[i];
    }
    return obj
}
 console.log(destructureArray([50,'apple',{a:1}]));

function arrayToString(array) {
    let stringOutput = '';
    for (let ele of array) {
        stringOutput += ele + ",";
    }
    let string = stringOutput.substring(0, stringOutput.length - 1)
    return string;
}
// console.log(arrayToString(['a','b','c']));


///----//// directly put in the array
//----- taking the first or single object from arrObj 
// function minifyObject(objArray){
//     let finalArray = [];
//     for(let ele of objArray){
//         finalArray.push({a:ele.a});  // needs to be explained ?????????-----
//     }
//     return finalArray;
// }
// console.log(minifyObject([{a:1,b:2,c:2},{a:2,b:3,c:4}]))



////-------///// first put in object then in Array

function minifyObject(objArray) {
    let finalArray = [];
    for (let ele of objArray) {
        let tempObj = {};
        for (let key in ele) {
            if (key != 'a'){
                tempObj[key]=ele[key];
            }
       }
       finalArray.push(tempObj);
    }
    return finalArray;
}
console.log(minifyObject([{ a: 1, b: 2, c: 2 }, { a: 2, b: 3, c: 4 }]))


