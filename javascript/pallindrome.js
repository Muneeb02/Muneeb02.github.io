// function add(a,b){
//     return a+b;
// }

// console.log(add(4,6));

function pallindrome(myArray){
    for(let i=0; i<myArray.length; i++){
        if(myArray[i] != myArray.charAt(myArray.length-1-i)){
            return false;
        }
    }
    return true;
}

console.log(pallindrome("eye"));




