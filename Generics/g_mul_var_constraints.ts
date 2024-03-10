// When we user generics and non generic type together then while calling the function we need to define the type in a manner but with non generics we dont

function add1<T,U>(a:T,b:U){
  console.log(typeof a)
  console.log(typeof b)
}

const result11=add1<number,string>(5,"Suman");
const result12=add1<String,number>("Suman", 5);


//we can also user Generic and Non generic together
function add2<T,U>(a:T,b:U,C:boolean){
  console.log(typeof a)
  console.log(typeof b)
  console.log(typeof C)
}

const result13=add2<number,string>(5,"Suman",true);
const result14=add2<String,number>("Suman", 5,true);//generic+non generic