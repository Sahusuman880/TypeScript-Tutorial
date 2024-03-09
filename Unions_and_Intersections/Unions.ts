//Union example
const inputValue=(value:string | number |boolean)=>{
   console.log(value);
}
inputValue("Suman")
inputValue(55);
inputValue(true)


//Real world Example

const userInput=(value:number | string): string | number=>{
    if(typeof value==="number"){
      return value*2;
    }
    else if(typeof value==="string"){
      return value.toUpperCase();
    }
    else{
      throw new Error("Invalid input Data")
    }
}
console.log(userInput(55))
console.log(userInput("Suman"))

//Homework
const homeWork=(value: boolean | number | string):string=>{
  if(typeof value==="number"){
    return `$${value}`;
  }
  else if(typeof value==="boolean"){
    return (value? "Yes":  "No")
  }
  else if(typeof value==="string"){
    return value.replace(/^./, value[0].toUpperCase());
  }
  else {
    throw new Error("Invalid input Data")
  }
}

console.log(homeWork(55));
console.log(homeWork(true));
console.log(homeWork("suman"));


//Union using object

type person={
  name:string;
  age:number
}

type Employee={
  emp_id:number;
  dept:string
}

type EmployeeDetails=person | Employee;

const employee:EmployeeDetails={
  name:"Suman",
  age:24,
  emp_id:55
}