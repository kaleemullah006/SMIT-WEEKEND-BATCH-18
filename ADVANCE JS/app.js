// HOISTING 

// console.log(a)
// var a = "ali";

// console.log(b)
// let b = "usman";

// console.log(c)
// const c = "abubakar";

// CONVENTIONAL FUNCTION 

// function multiply(a,b){
//     return a*b
// }
// console.log(multiply(6,6))

// ARROW FUNCTION 

// let multiply = (a,b)=> {

//     return a*b
// }

// console.log(multiply(4,4))

// UNDIFINED 

// let a;

// console.log(a)

// is not difined 

// console.log(e)

// before initialization 

// console.log(user)

// let user = "Bilal"

// console.log(player)

// const player = "bobzie the king"

//  JITC 

//  JITC : jab koi variable declare hota hai var se to variable or uski value undifined memory mainsave ho jati hai exicute hone se pehle, 
//   or let or const se jo variable banta hai uski value ubavailable save hoti hai , iska main maqsad code ko fast run karna hai

// let age = 18 ;

// let result = age >= 18 ? "adult" : "minor";

// console.log(result)

// let a = [1, 2, 3, 4];
// let b = [2,5,7,9,];
// let c = [...a,...b];

// console.log(b)

// let teacher = {
//     name: "Ayan",
//     subject :"Arabic",
//     experiens: "4 Years"
// }

// let {name, subject, experiens} = teacher;

// console.log(name,subject,experiens)

// let web = ["HTML", "CSS", "JS","REACT"];

// let [,,third,fourth] = web;

// console.log(third)
// console.log(fourth)

// let marks = 17

// let  result = marks >= 50 ? "pass": "fail";

// console.log(result)

// function myfoo( name = "student", ...marks){
//     let total = 0

//     for (let mark of marks)
//          total += mark


//     console.log(name + "total marks " + marks )

// }
// myfoo(77)
// myfoo("ali", 20, 48, 66)

// let personalInfo = {
//     name: "ali",
//     adress : "shah faisal"
// }
// let educationInfo = {
//     class: "6th",
//     school : "CMI"
// }

// let allInfo = {...personalInfo, ...educationInfo}

// console.log(allInfo)

// shallo copy ////

// let obj1 = {
//     name : "ali", 
//     adress : {city:"karachi"}
// }
// let obj2 = {
//     ...obj1
// }
// obj2.adress.city= "multan"

// console.log(obj2,obj1)

// let users = ["khalid", "usman", "ali", "usman","abubakar", "jalil","khalid", "usman", "ali", "usman","abubakar", "jalil" ];

// let newUser = users.forEach(function(user, index, ){
//     console.log(index,"user: ",user)
// })
// console.log(newUser)

// const users = [
//   "john",
//   "ahmed",
//   "ali",
//   "john",
//   "ali",
//   "john"
// ];
// const count = {};

// users.forEach(function(user){

//   if(count[user]){

//     count [user]++
//   }
//     else{
//       count[user]= 1
//     }
// })
// console.log(count)
// const users = [
//   "john",
//   "ahmed",
//   "ali",
//   "john",
//   "ali",
//   "john"
// ];
// const count = {};

// users.forEach(function(user){

//   if(count[user]){

//     count [user]++
//   }
//     else{
//       count[user]= 1
//     }
// })
// console.log( "john appears in "+ count["john"]+ " times" )
// console.log( "ahmed appears in "+ count["ahmed"]+ " times" )
// console.log( "ali appears in "+ count["ali"]+ " times" )



// console.log( "john appears in "+ count["john"]+ " times" )
// console.log( "ahmed appears in "+ count["ahmed"]+ " times" )
// console.log( "ali appears in "+ count["ali"]+ " times" )

// const marks = [40, 55, 70, 30, 90];

// let total  = 0;
// let pass = 0; 
// let fail = 0;

// marks.forEach(function(mark){
// total += mark
// if (mark >= 50){
// pass++
// }
// if (mark < 50){
//   fail++
// }
// })
// console.log("totalmarks " +total)
// console.log("total pass "+ pass)
// console.log("total fail "+ fail)

// const numbers = [10, 15, 20, 25, 30];

// let total = 0 ;
// let even = 0 ;
// let odd = 0;

// numbers.forEach(function(number){
//   total += number;

//    if(number % 2 === 0){
//     even++

//    }
//    else{
//     odd++
//    }
// })

// console.log("total: "+ total)
// console.log("even: " + even)
// console.log("odd: " + odd)

// const temps = [0, 10, 20, 30, 40];

// let total = 0;
// let above20 = 0;

// temps.forEach(function(temp){
//   total += temp;
//   if(temp> 20 ) {
//     above20++
//   }
// })
// console.log("total temp:"+ total)
// console.log("Above 20:"+ above20)

// const prices = [100, 250, 80, 300, 150];

// let totalBill = 0;
// let expItems = 0;
// let highestPrice = 0;

// prices.forEach(function (price) {
//   totalBill += price;

//   if (price > 200) {
//     expItems++
//   }
//   if (price > highestPrice ) {

//    highestPrice = price
//   }
// })

// console.log("Total Bill: "+ totalBill)
// console.log("Expensive items:"+ expItems)
// console.log("Highest Price:"+ highestPrice)

// const scores = [45, 90, 60, 30, 75];

// let totalScore = 0;
// let highestScore = 0;
// let lowestScores = scores[0];
// let passCount = 0

// scores.forEach(function (score) {
//   totalScore += score;
//   if (score > highestScore) {
//     highestScore = score
//   }
//   if (score >= 50) {
//     passCount++
//   }

//   if (score < lowestScores) {
//       lowestScores = score
//   }
// })

// console.log("Total Score: " + totalScore)
// console.log("higest score : " + highestScore)
// console.log("Lowest score:" + lowestScores)
// console.log("pass count:" + passCount)

// const numbers = [5, 10, 15, 20];

// let double = numbers.map(function(number){
//   return number * 2
// })
// console.log(double)

// or 

// const numbers = [5, 10, 15, 20];

// let double = numbers.map(number => number *2)
// console.log(double)

// const names = ["ali", "ahmed", "john"];

// let greet = names.map(name => "hello "+ name)


// console.log(greet)

// const prices = [100, 200, 300];

// let extraPrice = prices.map(price => price + price*0.10)

// console.log(extraPrice)

// const students = [
//   { name: "Ali", marks: 40 },
//   { name: "Ahmed", marks: 70 },
//   { name: "John", marks: 55 }
// ];

// let result = students.map(function (student) {

//   return {

//     name: student.name,
//     marks: student.marks,
//     result: student.marks >= 50 ? "pass" : "fail"
//   }
// })
// console.log(result)


// const students = [
//   { name: "Ali", marks: 40 },
//   { name: "Ahmed", marks: 70 },
//   { name: "John", marks: 55 }
// ];

// let result = students.map(student => ({
//   name:student.name,
//   marks: student.marks,
//   result: student.marks>50 ? "pass" : "fail"
  
  
// }
// ))
// console.log(result)

// 

const nums = [1, 2, 3, 4];

let squared = nums.map(function (num){
  return num + " squared = "+ num**2
})
console.log(squared)
