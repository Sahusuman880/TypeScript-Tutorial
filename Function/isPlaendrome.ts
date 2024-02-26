function isPalendrome(text:string):boolean{
  
  let i:number=0;
  let j:number=text.length-1;
  let count:number=0;
  while(i<j){
    if(text[i]===text[j]){
      count++;
    }
    i++;
    j--;
  }
  if(count===Math.floor(text.length/2)){
    return true
  } else{
    return false
  }

}

let resultof:boolean=isPalendrome("SumuS");
let str:string=(resultof?"Palendrome ":"Not a Palendrome");
console.log(str);