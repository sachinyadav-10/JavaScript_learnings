// data types .... 1) permitive   2) non-permitive

// 1) premitive
    // total 7 in count 
    String
    Number
    Boolean
    null
    undefined // varible and space is declared but value is not given still
    Symbol
    BigInt

    // Memory used by these types of datatypes is stack memory 
        // this spicfy that the every varible get a copy of the assigned value
        // if we change one of that value it wont affect the other varibale value which having stored that by assigning it into that
        let num1=10;
        let num2 = num1;
        num1=50;
        console.log(num2);    // this gives 10 only becouse it made a copy of num 1 and then stored so no matter further the num1 got changed or not it wont affect the value of num1
        

// 2) non- premitive (refrence type)
      Array
      Object
    //function 

    // Memory used in this type of datatypes is heap
        // heap memory specify that is give a refrence of the data stored to a variable from the heap where the data is stored acutally 
        // so if we change the value of one variable then this affect the other vaibale also who have stored the value of that variable
        let myobj1={
            name:"sachin",
            age:"20",
        }
        let myobj2=myobj1;
        myobj1.name="muskan";
        console.log(myobj1.name);
        console.log(myobj2.name);