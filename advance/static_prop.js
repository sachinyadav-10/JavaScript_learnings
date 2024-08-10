class User{
    constructor(username){
        this.username=username;
        
    }

    logMe(){
        console.log(`Username ${this.username}`)
        User.createId(); // to acess the static fucntion we use class name not by object 
    }
    static createId(){
        console.log(`ho gya bhaiiii`);
        return  `123`;
        
    }
}
class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email
    }

}

const sachin= new User("sachin")
// console.log(sachin.createId());
sachin.logMe();

const yadav = new Teacher("yadav","xcv")
// console.log(yadav.createId());