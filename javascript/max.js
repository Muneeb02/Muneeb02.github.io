// function max(a,b){
//     if(a>b){
//         return a;
//     }
//     else{
//     return b;   
//     }
// }

// console.log(max(7,3));


// max of three numbers

function maxOfThree(a,b,c){
    let max;
    if(a>b && a>c){
        max=a;
        return max;
    }
    else if(b>a&& b> c){
        max=b;
        return max;
    }
    else return c;

}

// console.log(maxOfThree(4,9,6));


// isVowel

let vowel = ["a","e","i","o","u"];

function isVowel(chars){
    for(let i=0; i<vowel.length;i++ ){
        if(vowel[i]==chars){
            return true;
        }
    }

    return false;
}

// console.log(isVowel("y"));


//sum() and multiply()


let num = [1,2,3,4];

function sum(num){
    let count = 0;
    for(let i=0; i<num.length; i++){
        count+=num[i];
    }

    return count;
}

function multiply(numArr){
    let count1 =1;
    for(let i=0; i<numArr.length; i++){
        count1*=numArr[i];
    }

    return count1;
}

//  console.log(sum(num));
// console.log(multiply(num));



///// reverse()

function reverse(string1){
    let reverse1 = ' ';
    for(let i=string1.length; i>=0 ;i--){
        reverse1 += string1.charAt(i);
    }
    return reverse1;

}

//console.log(reverse("jag testar"));


function loopingObject(obj){
    for(let key in obj){
    //    console.log(" key : value",key, obj[key])
    }
}

loopingObject({a:1,b:2})




var items = ['milk', 'bread', 'sugar'];

//find index of item if it exists
var a = items.indexOf('milk');
//console.log(a); // 0


var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(1, 3);
var spliced = names.splice(1,3);

// console.log(sliced);
// console.log(spliced);
// console.log(names);


var numbers = [1, 2, 3, 4, 5, 6];

var total = numbers.reduce((a, b) => {
  return a + b;
});

//console.log(total); // Total returned is : 21


let array =  [[0, 1], [2, 3], [4, 5]];

let flattened = array.reduce(function(a, b) {
    return a.concat(b);
},[ ]);  // [] empty array is optional, it is identity , it is initial value so 0, or empty array 

//console.log(flattened); // [ 0, 1, 2, 3, 4, 5 ]

let array33 = [];
let array2 = [{a:1},"string",34];
let obj = array2[0];
obj.a = 10;

// console.log(array2);
// console.log(array2.length);


//let obj = {a:1};
let obj1 = obj;
obj1.a= 10;
// console.log(array2)

array2[2]="Updated String";
//console.log(array2);


// console.log(array2.indexOf("string"));

//console.log(array2.indexOf("hello")>=0);

// 3. Delete Item/items - remove the element at nth position
array2[1]=null;//Not this
//delete array2[1];
//console.log(array2,array2.length);

array2.splice(1,1);//delete One element
//console.log(array2,array2.length)

let copyArray = array2;
//console.log(copyArray);

array2[2]= "new item";
// console.log(array2);
// console.log(copyArray);

let cpyarr = array2.slice(0);
//console.log(cpyarr);

array2[3]= "item item";
// console.log(array2);
// console.log(cpyarr);

array2.push("x");
array2.push("y");
//console.log(array2);

let slicedArray = array2.slice(1,3);
//console.log("Sliced Array ",array2,slicedArray);

let newArray = [1,2];
let mergedArray = array2.concat(newArray);
console.log("Concatened Array ", array2.length,newArray.length,mergedArray.length);
console.log(mergedArray);
//Determine whether the variable is of array or not
console.log(Array.isArray(newArray));



// convert object to arry
let objNew = { a: 1, b: 2, c: [10, 20], d: { x: 1, y: 2 } }

function convertObjToArr(objNew){
    let arrConvert = [];
    for (let key in objNew) {
        if(Array.isArray(objNew[key])){
            let str1 ='';
            for (let vals of objNew[key]) {
                str1+= vals;
            }

            arrConvert.push(key + str1);
        }
        else if(typeof objNew[key] =="object"){
            let objVal = objNew[key]
                for (let key1 in objVal ) {
                    arrConvert.push(key + key1 + objVal[key1])
                }
        } else{
            arrConvert.push(key + objNew[key]);
        }
    }

    return arrConvert;

}

console.log(convert(objNew));