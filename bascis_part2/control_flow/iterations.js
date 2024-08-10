// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log(`${element} is the best number`);
//     }
//     console.log(element);
    
// }

// while
// let i=0;
// while(i<=10){
//     console.log(`value is ${i}`)
//     i+=2;
// }


// do while

// do{
//     console.log(`value is ${i}`);
//     i+=2;
// }while(i<=10)


// ***********************************************************************************

// Higher order array loops

// ["","",""]
// [{},{},{},{}]

// for of loop ******************

const arr=[12,3,4,5];
// for (const i of arr){
    //     console.log(arr);
    // }
    
const string = "sachin yadav";
    
// for (const i of string){
//     console.log(i);
// }


// MAPS .. hold key value pair and remember order unlike objects 
const map = new Map;
map.set('IN','India')
map.set('US','USA')
 
// console.log(map);

// for(const [key,value] of map){
//     console.log(key,'=>',value);
// }

// Objects ...
// for in loop **************

const myObject ={
    'game1':'gta vice city',
    'game2':'taken'
}

// // for(const [key,value] of myObject){
// for(const key in myObject){
//     // console.log(key,"->",value);// this is not valide way of iteration 
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["java", "js", "python" ,"c++"];
// for(const key in programming){
//     console.log(key);
//     console.log(programming[key]);
// }



// for(const key in myObject){
//     console.log(key);
//     console.log(myObject[key]);
// }

// formap we can do like this beacouse it is not iterable like this 
// const map1 = new Map;
// map1.set('IN','India')
// map1.set('US','USA')
// map1.set('Fr','France')


// for(const key in map1){
//     console.log(key);
//     console.log(map1[key]);
// }


// ********************************** FOR EACH ****************************************


const coding = ["js","c++","c#","python"]
// methos 1
// coding.forEach(function (i){
//     console.log(i);
// });

//method 2
// coding.forEach( (i)=>{
//     console.log(i);
// });

// meethod 3
// function printme(i){
//     console.log(i);
// }
// coding.forEach(printme);

// showing that there are more parameters that for each holds other than i 
// coding.forEach( (i,index,arr)=>{
//     console.log(i,index,arr);
//     console.log(" ")
// });



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((i)=>{

    // console.log(i);
    console.log(i.languageName);
})
    