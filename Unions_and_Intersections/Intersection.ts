//intersection means we have to add all the properties
type person1={
  name:string;
  age:number
}

type Employee1={
  emp_id:number;
  dept:string
}

type EmployeeDetails1=person1 & Employee1;

const employee1:EmployeeDetails1={//we have to add both object properties
  name:"Suman",
  age:24,
  emp_id:55,
  dept:'IT'
}


//Homework
type User={
  name:string;
}

const User1:User={
  name:"Suman"
}

type Mylocation={
  address:string;
}

const Location1:Mylocation={
  address:"Baliguda"
}
const createUserProfile=(user:User,location:Mylocation)=>{
   return {
    ...user,...location
   }
}
const myCompleteInfor:User & Mylocation=createUserProfile(User1,Location1);
console.log(myCompleteInfor);