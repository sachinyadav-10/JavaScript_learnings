// // arbitirary date........... january 1, 1970
// let myDate = new Date();
// console.log(myDate.toJSON()); //  2024-07-27T01:37:07.275Z
// console.log(myDate.toLocaleString());  //  27/7/2024, 7:06:29 am
// console.log(myDate.toString()); //   Sat Jul 27 2024
// console.log(myDate.toDateString()); //  2024-07-27T01:34:37.815Z
// console.log(myDate.toISOString()); //  2024-07-27T01:34:37.815Z


// let myCreatedDate =  new Date(2023,0,23);
// let myCreatedDate2 =  new Date("2023-01-23"); // YYYY-MM-DD
// let myCreatedDate3 =  new Date("23-01-2023"); //DD-MM-YYYY
let myCreatedDate4 =  new Date("01-23-2023"); //MM-DD-YYYY
// console.log(myCreatedDate.toDateString());   // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());  //23/1/2023, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(myCreatedDate4/100));



let newDate= new Date();
// console.log(newDate.getMonth()); // start  from 0 
// console.log(newDate.getDate()); 
// console.log(newDate.getDay()); // monday =1 then calculate
// console.log(newDate.getFullYear()); // etc..... there are more function with get you can try 

let localeDate = new Date()
localeDate.toLocaleDateString('DD',{
    weekday:"long",    // we can specify what we want press ctrl+space to see all the properties to specify in curlly brackets
    dateStyle:"short"
})
console.log(localeDate);