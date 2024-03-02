//we can declare a type-alases using "type" keyword
type Person={
  name:string;
  age:number;
  isStudent:boolean;
  address:{
    city:string;
    country:string;
  }
}

//Person1
const person5:Person={
  name:"Suman",
  age:24,
  isStudent:true,
  address:{
    city:"Balliguda",
    country:"India",
  }
}

//Person2
const person6:Person={
  name:"Suman",
  age:24,
  isStudent:true,
  address:{
    city:"Balliguda",
    country:"India",
  }
}

//Person3
const person7:Person={
  name:"Suman",
  age:24,
  isStudent:true,
  address:{
    city:"Balliguda",
    country:"India",
  }
}


//There is a object create a function to calculate the total price
type Product={
  name:string;
  price:number;
  quantity:number
}
const product1:Product={
  name:"Lpatop",
  price:1000,
  quantity:5,
}

const calculatePrice=(product1:Product)=>{
  console.log(`the price is ${product1.price*product1.quantity}`)
}
calculatePrice(product1);