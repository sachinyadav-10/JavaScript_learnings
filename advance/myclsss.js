// ES6

// class User{
//     constructor(username,Email,password){
//         this.username=username;
//         this.Email=Email;
//         this.password=password;

//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.uppperCase()}`
//     }
// }

// const obj1 = new User ("sachin","yadav@gmail.com","123");

// console.log(obj1.encryptPassword());
// console.log(obj1.changeUserName());



//behind the sccene
function User(username,Email,password){
    this.username=username;
    this.Email=Email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
     return `${this.password}abc`
}
User.prototype.changeUserName=function(){
     return `${this.username.toUpperCase()}`
}

const muskan = new User("muskan","agarwal@gmail.com","123")
console.log(muskan.encryptPassword());
console.log(muskan.changeUserName());
