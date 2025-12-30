
// Cash Counter / chocolate Assignment 

let userBill = +prompt("enter your bill");
let userAmount = +prompt("emter your amount");

let remainingAmount = userAmount - userBill;

let chocolate = Math.floor(remainingAmount/5);

let cash = remainingAmount % 5;

console.log("user chocolate : "+ chocolate)
console.log("user cash is :"+ cash)