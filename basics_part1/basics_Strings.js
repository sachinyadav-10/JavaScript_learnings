const name="sachin"
const repo_count=5;
// console.log(name+repo_count+"value");........ this is not good practice

console.log(`hello my name is ${name} and my repo count is ${repo_count}`)


const gamename = new String('sachin');
console.log(gamename);
// console.log(gamename[0]);
// console.log(gamename,__proto__);   //**********doubt*************
// console.log(gamename.length);
// console.log(gamename.indexOf('h'));
// console.log(gamename.charAt(4));
// console.log(gamename.toUpperCase());
const newstring = gamename.substring(0,4);   // here 4th index is excluded
// substring not accept negative values where slice can 
console.log(newstring);
const otherString=gamename.slice(-4,-1);
// no excludation in slice the range included edges 
console.log(otherString);




const food ="    coffee      ";
console.log(food);
console.log(food.trim()); // remove the extra charcter form the string 

const url="https://google.com";
console.log(url.replace('google','facebook'));
console.log(url);
console.log(url.includes("sachin"));


const spiltting = "sachin-yadav-muskan-agarwal"
let check=spiltting.split("-"); // go on documentation
console.log(check);
