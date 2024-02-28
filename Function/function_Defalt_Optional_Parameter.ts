//Normal function
function greet4(name:string,id:number){
  return `Welcome,${name} your id is ${id}`
}
console.log(greet4("SUMAN",5));

//Default Parameter
function greet5(name:string,id:number=5){ //default Parameter
  return `Welcome,${name} your id is ${id}`
}
console.log(greet5("SUMAN"));

//Optional Parameter
function greet6(name:string,id?:number){ //Optional Parameter
  if(id){

    return `Welcome,${name} your id is ${id}`
  }
  else{
    return `Welcome,${name} `
  }
}
console.log(greet6("SUMAN"));
console.log(greet6("SUMAN",5));