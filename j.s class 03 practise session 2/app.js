
// var gradeA = 80-100;
// var gradeB = 60-79;
// var gradeC = 40-59;
// var fail   =  0-39;

// const marks = prompt("Enter Your Marks")
// if(marks === null){
//     alert("You Cancelled the Input")
// }
// else if(marks.trim() === ""){
//     alert("you kept the Input Empty")
// }

// else if (marks >= 80 && marks <= 100) {

//     alert("Grade A")

// }
// else if (marks >= 60 && marks <= 79) {


//     alert("Grade B")
// }


// else if (marks >= 40 && marks <= 59) {


//     alert("Grade C")
// }

// else if (marks >= 0 && marks < 40) {

//     alert("Fail")
// }
// else {
//     alert("Invalid Marks")
// }

// let marks = prompt ("Enter Your Marks")

// if(marks === null){
//     alert("You Cancelled the Input!")
// }
// else if (marks.trim() === ""){
//     alert("You kept the Input Empty")
// }
// else {
//     marks = +(marks)

//     if(isNaN(marks)){
//         alert("Invalid Input! Please enter numbers only.")
//     }
//     else  if (marks >= 80 && marks <= 100) {

//     alert("Grade A")

// }
// else if (marks >= 60 && marks <= 79) {


//     alert("Grade B")
// }


// else if (marks >= 40 && marks <= 59) {


//     alert("Grade C")
// }

// else if (marks >= 0 && marks < 40) {

//     alert("Fail")
// }
// else {
//     alert("Invalid Marks")
// }

// }

// Q2 

// var oddEven = +prompt("Enter A Number")

// if(isNaN(oddEven)){
//     alert("Invalid ! please enter only number")
// }
// else if(oddEven % 2 === 0){
//     alert("Even number hai")
// }
// // if(oddEven % 2 != 0){
// //     alert("Odd number hai")
// // }
// else {
//     alert("odd number hai")
// }

// Q3 


let num1 = +prompt("enter first number")
let num2 = +prompt("enter second number")
let operator = prompt("enter anyone operator -,+,*,/")

if (isNaN(num1) || isNaN(num2)) {
    alert("please enter only number")
}
else if (operator === "-") {
    alert("your number is " + (num1 - num2))
}
else if (operator === "+") {
    alert("your number is " + (num1 + num2))
}
else if (operator === "*") {
    alert("your number is " + (num1 * num2))
}
else if (operator === "/") {
    if (num2 === 0) {
        alert("cannot divide by zero")
    }
    else {

        alert("your number is " + (num1 / num2))
    }
}
else {
    alert("invalid operator ")
}