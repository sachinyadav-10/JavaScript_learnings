let score = "33";
// console.log(typeof(score));
// console.log(typeof score);// 2nd way of checking the type of 

// converting the string into the number
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

//  // some conversion what they return after converting them into number 
//      // "33"  => 33;
//      // "33abc" => NaN
//      // true => 1 , false => 0



// let isLoggedIn="";  // for empty string boolean give false in return after conversion
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);


// let isLoggedIn="abc";  // for non-Empty string boolean gives the value true in the return   
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);


let someNumber = 33;
let someString=String(someNumber);    // converting number to string
console.log(someString);
console.log(typeof(someString));

// ***********************************OPERATIONS*******************************

 let value = 3;
 let negvalue = -value;
 console.log(negvalue);
 
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**6);
 console.log(2%6);
 console.log(2/6);

 let str1 ="sachin";
 let str2 = " yadav";
 let str3 = str1+str2;
 console.log(str3);

 console.log(1+"2");
 console.log("1"+2);
 console.log("1"+2+2);
 console.log(1+2+"2");
 console.log(1+"2"+2);

 console.log(1+2+true);
 console.log("1"+2+true);
 console.log(1+"2"+true);
 console.log(true+1+"2");

console.log(true);
console.log(+true);
// console.log(true+);//....error
console.log(+"2");
console.log(+""); // equavalent to this console.log(+"0")