// // Q1.. ALERT

// // alert("welcome to javascript test") 

// // Q2 .... VARIABLES FOR STRING

// // let fullName = "KALEEM ULLAH"

// // console.log(fullName)

// // Q3 ... VARIABLES FOR NUMBERS 

// // let num1 = 33;
// // let num2 = 44 ;
// // let result = num1 + num2
// // console.log("the result is :"+ result)


// // Q4: Variable Names Legal and Illegal 

// // // legal variable name 
// //  . fullName

// // //  illegal variable name 
// // . full name

// // Q5: Math Expressions — familiar operators 

// let num1 = 5 ;
// let num2 = 10 ;

// let result = num1*num2;

// console.log(result)

// Q6: Math Expressions — unfamiliar operators 

// let reminder = 15 % 2;
// console.log(reminder)

// Q7: Math Expressions — eliminating ambiguity 

// (2 + 3) * 4 

// let plus = 2+3 ;
// let multiply =  4;
// let result = plus * multiply;
// console.log(result)

// Q8: Concatenating text strings 

// let firstName = "kaleem";
// let lastName = "ullah"
// console.log("my name is "+firstName+" "+lastName)

// // Q9: Prompts 

// let userName = prompt("Enter Your Name");
//  console.log("my name is:"+ userName)

// Q10: if statement 

// let age  = 18; 
// let yourAge = +prompt("Enter your Age");
// if (yourAge > 18) {
//     console.log("You Are Eligible")

// }

// Q11: Comparison operators 
// == 
// let num1 = "12";
// let num2 = +prompt("enter a number ");

// if(num2 == num1){
//     console.log("this is duuble comparison operator")
// }

// ===

// let num1 = "12";
// let num2 = +prompt("enter a number ");

// if(num2 === num1){
//     console.log("this is tripple comparison operator")
// }else{
// console.log("not equal")
// }

// Q12: if…else / else if 

// let userMarks = +prompt("Enter Your Marks");

// if (!userMarks ){
//     console.log("please enter your marks")
// }



// else if (userMarks >= 80 && userMarks <= 100) {
//     console.log("Grade A")
// }
// else if (userMarks >= 60 && userMarks <= 79) {
//     console.log("Grade B")
// }
// else if (userMarks >= 40 && userMarks <= 59) {
//     console.log("Grade C")
// }
// else if (userMarks >= 0 && userMarks <= 39) {
//     console.log("FAIL")
// }
// else {
//     console.log("Not available")
// }


// let userMarks = prompt("Enter Your Marks");

// if(userMarks === null || userMarks.trim() === ""){
//     console.log("Please enter your marks")
// }
// else{
//     userMarks= Number(userMarks)

//     if(isNaN(userMarks)){
//         console.log("Please enter only number")
//     }
//     else if (userMarks < 0 || userMarks > 100){
//         console.log("please enter a number between 0 to 100")
//     }
//     else if(userMarks >=80){
//         console.log("Grade: A")
//     }
//     else if(userMarks >=60){
//         console.log("Grade: B")
//     }
//     else if(userMarks >=40){
//         console.log("Grade: C")
//     }
//     else if(userMarks >=20){
//         console.log("Grade: D")
//     }else {
//         console.log("Grade: fail")
//     }
// }

// let userMarks = prompt("Enter Your Marks");

// if (userMarks === null || userMarks.trim() === "") {
//     console.log("Please enter your marks");
// } else {
//     userMarks = Number(userMarks);

//     if (isNaN(userMarks)) {
//         console.log("Please enter only numbers");
//     }
//     else if (userMarks < 0 || userMarks > 100) {
//         console.log("Please enter a number between 0 and 100");
//     }
//     else {
//         let grade;

//         if (userMarks >= 80) grade = "A";
//         else if (userMarks >= 60) grade = "B";
//         else if (userMarks >= 40) grade = "C";
//         else if (userMarks >= 20) grade = "D";
//         else grade = "Fail";

//         console.log("Grade:", grade);
//     }
// }


// Q13: Arrays 


// let fruitsName = ["apple", "banana", "mango"]

// console.log(fruitsName)

// Q14: Arrays — Adding & Removing 

// let fruitsName = ["apple", "banana", "mango"]
// fruitsName.push("orange")
// console.log(fruitsName)
// fruitsName.shift(0,1)
//  console.log(fruitsName)

// Q15: Arrays — Splice 

// let fruitsName = ["apple", "banana", "mango"]
// fruitsName.push("orange")
// fruitsName.shift(0,1)
//  console.log(fruitsName)
//  fruitsName.splice(1,1,"grapes")
//  console.log(fruitsName)

// Q16: for loop 

// for (let i = 1; i<= 10 ; i++){
//     console.log(i)
// }

// Q17: for loop + array 

// let fruitsName = ["apple", "banana", "mango"]

// for (let i = 0 ; i<fruitsName.length; i++){
//     console.log(fruitsName[i])
// }

// Q18: Array Searching (Flags + for loop) 

// let fruitsName = ["apple", "banana", "mango", "orange"]
// let findFruits = prompt("Enter fruit name ").toLowerCase();
// let flag = false;

// for (let i = 0; i < fruitsName.length; i++) {
//     if (fruitsName[i] === findFruits){

//         flag = true;
//         break;
//     }
// }
// if (flag) {
//     console.log("fruit found")
// } else {
//     console.log("fruit Not found")
// }

let fruitsName = ["apple", "banana", "mango", "apple", "orange", "apple","mango"];
let findFruits = prompt("Enter fruits name").toLowerCase();

let count = 0;
let flag = false;
for (let i = 0; i < fruitsName.length; i++) {
    if (fruitsName[i] === findFruits) {
        flag = true
        count++
    }
} if (flag) {
    console.log(findFruits+" found " + count + " times")
} else {
    console.log("fruit not found")
}
