//we can add or delete a element from array using push and pop method.
const arr5:number[]=[1,2,3,4,5,6];

//1.Uisng push
 const arr6=arr5.push(10);
 console.log(arr6)
 console.log(arr5);

//2.Using Pop method
const ele=arr5.pop();
console.log(ele);
console.log(arr5);

//we can itterate a array using following things

//1.For loop

for(let i=0;i<arr5.length;i++){
  console.log(arr5[i]);
}


//2.Using For of loop

for(let i of arr5){
  console.log(i);
}

//3.Using forEach loop

arr5.forEach((val)=>{
  console.log(val);
})