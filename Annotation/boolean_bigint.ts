let isname:boolean=true;
// isname="suman" //not valid

function isEven(num:number):boolean{
  return num%2===0;
}

let result1:boolean=isEven(5);
if(result1){
  console.log("Number is Even")
}
else{
  console.log("Number is Odd");
  
}