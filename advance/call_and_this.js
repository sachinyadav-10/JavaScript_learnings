function SetUsername(username){
    this.username=username;
    console.log("called")
    // return(this.username)
}
function createUser(username ,email,id ){
    this.id=id
    this.email=email
    SetUsername.call(this,username); 
}
const coffe = new createUser("sachin","sy083328@gmail.com",23);
console.log(coffe);