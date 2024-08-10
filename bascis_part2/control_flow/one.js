// if

const isUseraLoggedIn=true;
//if(condition){     // if condition get ture then only the statements inside the curely bracket of if wil executed

//}

// (==) is use to compare where (=) is use to assign the value
// "===" is use to compare the value as well as data types 
// "!==" it use to compare the negative side also 



// all falsy values ........ 0,-0,BigInt 0n,"" , null , undefined , NaN
// some truthy values ........ "0" , 'false' , [] , {} , function(){}

// const emptyObj={}
// if (Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }


// Nulish coalescing operator (??): null ,undefined
let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

let iceTeaPrice = 100;
iceTeaPrice >=100 ? console.log("less than 80") : console.log("greater than 80");
