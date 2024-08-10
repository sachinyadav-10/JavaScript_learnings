// singleton  ................. if we declare object by constructor it get make sigelton
// Object.create ... this is constructor method 

// object literals   ...... explained below  

const mySym = Symbol("key1");
const JsUser = {       //objects holds key value pairs 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",

    //mySym: "mykey1",  // if we declare the key like this of symbol datatype then it wil be wrong (refer to line 22)
    [mySym]: "mykey1", //this is right way (line 23)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);  // we cant access by this method if key value is string trype (see next line)
// console.log(JsUser["full name"]);   //so we have no option here except this way to acess
// console.log(JsUser["email"]);  //ther is no diffrence here in above . methos and this sq bracket method 
// console.log(typeof(JsUser[mySym]));
// console.log(typeof(JsUser[mySym]));

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)   // this will freez the changes further in the object 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = ()=>{     // i replaced function() by ()=> this called arrow function
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // using  `...` insted of "...." for adding varible in btw print statement by ${} symbol
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// ******************* PART 2 *************************************************

const tinderuser = new Object();
tinderuser.id="123abc";
tinderuser.name="rajat";
tinderuser.isLoggedIn=false;
 
// console.log(tinderuser);

const regularUser = {    // passing objext into object
    email:"sy083328@gmail.com",
    fullName:{
        userFullname:{
            firstName:"sachin",
            lastName:"yadav"
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstName);


const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"a",5:"b",6:"c"};
const obj3={7:"g",8:"h",9:"y"};
const obj4={obj1,obj2};
// console.log(obj4);
const obj5=Object.assign({},obj1,obj2,obj3)  //{} --> target , this is option parameter gives gurantee of the sucessfull merging (good practise)
// console.log(obj5);
const obj6={...obj1,...obj2,...obj3};
// console.log(obj6);// by spread  operator

const users=[
    
    {
     id:1,
     name:"king"   
    },
        {
        id:1,
        name:"king"   
       },
       {
        id:1,
        name:"king"   
       },
       {
        id:1,
        name:"king"   
       },
       
]
console.log(users[1]);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLogged'));



//************************** PART 3 ****************************************/



// destructuring of objects
const course= {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"sachin"
}

// course.courseInstructor

// const {courseInstructor} =course;
// console.log(courseInstructor); 
const {courseInstructor:instructor} =course; //instructor be a alias to course.courseInstructor
console.log(instructor); 

