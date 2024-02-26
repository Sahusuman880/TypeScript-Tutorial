function calculateAvg(arr:number[]):number{
  let resultset=arr.reduce((a:number,b:number):number=>{
    return a+b;
  })
  return resultset/arr.length;
}
let arr:number[]=[1,2,3,4,5,6,7];
console.log(calculateAvg(arr));