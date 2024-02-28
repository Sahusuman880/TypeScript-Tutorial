function maxVal(arr:number[]){
  arr.sort((a:number,b:number):number=>{
    return a-b;
  })
  return arr[arr.length-1];
}

let arr1:number[]=[1,5,8,2,10,3,9];
console.log(`the max value is ${maxVal(arr1)}`);
