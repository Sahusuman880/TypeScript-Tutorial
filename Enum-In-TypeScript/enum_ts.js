"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Suman",
    email: "sumansahu@gmail.com",
    password: "123456789",
    role: Roles.admin
};
const user2 = {
    email: "Suman@gmail.com",
    password: "85263",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { name, role } = user1;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
