type Student={
  name:String;
  age:number;
  gender?:string;
  greet:(country:string)=>string  //method call signature
  // (country:string):string    pure call signature
}

const Student1:Student={
  name:"Suman",
  age:24,
  greet:(country)=>`my name is ${Student1.name}, my age is ${Student1.age} and i am from ${country}`
}
const Student2:Student={
  name:"Vinod",
  age:29,
  greet:(country)=>`my name is ${Student2.name}, my age is ${Student2.age} and i am from ${country}`
}

const introduction=(Student1:Student)=>{
  const {name,age}=Student1;
  console.log(`my name is ${name} and my age is ${age}`);
}
introduction(Student1);
console.log(Student1.greet("India"));
console.log(Student1.greet("Nepal"));