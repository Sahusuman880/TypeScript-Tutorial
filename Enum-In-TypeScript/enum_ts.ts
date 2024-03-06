enum Roles{
  user="user",
  admin="admin"
}

type LoginDetails={
  name?:string;
  email:string;
  password:string;
  role:Roles

}

const user1:LoginDetails={
  name:"Suman",
  email:"sumansahu@gmail.com",
  password:"123456789",
  role:Roles.admin
}

const user2:LoginDetails={
  email:"Suman@gmail.com",
  password:"85263",
  role:Roles.user
}

const isAdmin=(user1:LoginDetails):string=>{
   const {name,role}=user1;
  return role==="admin"? `${name} is allow to edit the website`:`${name} is not allow to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));