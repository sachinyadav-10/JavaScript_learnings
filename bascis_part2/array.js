 //arrays
 const myarray = [0,"sachin",true,1,2,3,4,5,6];
 // gives zero based indexing
//  if we copy anything in array then it create shawllow copy (in place)
const myarr2 = new Array(1,2,3,4,5);
// console.log(myarr2[0]);
// myarray.push(6);  // push pop both work 
// console.log(myarray);
// myarray.pop();
// myarray.unshift(9); // use for add at first position but it is not optimised take time for very long data 
// console.log(myarray);
// myarray.shift(); // delte from first 
// console.log(myarray);
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(19));


// const newarr = myarray.join;
// console.log(myarray); 
// console.log(newarr); 


// slice and splice

// const myarr1=myarray.slice(1,3); // last index is not included
// console.log(myarray);
// console.log(myarr1);

// const myarr3 =myarray.splice(1,3);// it includes last index but remove the part form origanal array and include it in sel one ;
// console.log(myarray);
// console.log(myarr3);


//***********************part 2 ***********************************

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros) // this returns a new array after concatination
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) // we need to give depth in flat function to unwind the array 

// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));