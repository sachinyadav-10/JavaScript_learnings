class Users{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`user name is ${this.username}`);
    }
}
class Teacher extends Users{
    constructor(username,email,pass){
        super(username) 
        this.email=email
        this.pass=pass;
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}
const yadav = new Teacher("sachin","yadav@gamil.com","abc");

yadav.addCourse();