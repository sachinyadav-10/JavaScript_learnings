// const score = 400;
// console.log(score);
// console.log(typeof(score));

// const balance = new Number(400);  // if we want to give the datatype by self for 100% surity of datatype
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// balance=123.8934;
// console.log(balance.toPrecision(3)); // return a string type 
// console.log(balance.toPrecision(2)); // return a string type 
// balance=1000000000000;
// console.log(balance.toLocaleString('en-IN')); //en-IN is for indian standrad otherwise it give international standred


//*******************************MATHS********************************


// console.log(Math);
// console.log(Math.abs(-4));   // change neg to positive only not vice versa
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// min max square root etc mdn se syntax dekh lena 

console.log(Math.random()); // need to see documnetation for this waht range it will return the ans byvdefault
console.log(Math.floor(Math.random()*10)+1); // *10 tells the max number which it can genrate 

// to get the random no in a range we do jugaad  given below
const min = 10;
const max =20;
console.log(Math.floor(Math.random() *(max-min+1)) +min); // by (max-min+1) we get a range and by adding min to it we set the range shuld be above this min value 

