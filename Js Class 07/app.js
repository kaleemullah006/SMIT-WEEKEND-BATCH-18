
// // rounding number //
// //  assignment 07
// //  USER K 5 rope bach gaye to chococlete wapis krna hai agar 12 rope ho to 2 choco or 2 rope 

// // RANDOM NUMBER   //


// let random = Math.random( )

// console.log(random)


// to exponent  check karna hai


// let userBill  = +prompt("enter your bill");
// let userAmount = +prompt("Enter your total amount");

// let remainAmount = userAmount - userBill;

// let chococleteRate = 5;

// let chocolate = Math.floor(remainAmount/5)
// let cash = remainAmount % 5;



// console.log("chocolate:" +chocolate)
// console.log("Remaining cash :"+ cash)

// let userBill  = +prompt("Enter your bill");
// let userAmount = +prompt("Enter your total amount");

// let remainAmount = userAmount - userBill;

// let chocolate = Math.floor(remainAmount / 5);
// let cash = remainAmount % 5;

// console.log("Chocolate:", chocolate);
// console.log("Cash:", cash);

// let userBill = +prompt("Enter your Bill");
// let userAmount = +prompt("Enter your Amount");

// let remainAmount = userAmount-userBill;

// let choco = Math.floor(remainAmount/5);
// let cash = remainAmount% 5;

// console.log("chocolate:"+ choco)
// console.log("reamining cash : "+ cash)


// let rightNow = new Date();
// let day = rightNow.getDay()
// let date = rightNow.getDate()
// let time = rightNow.getTime()


// console.log(rightNow,date,day, time)

// let daysName = +prompt("enter day digit")

// if(daysName=== 0){
//     console.log("sunday")
// }
// else if(daysName=== 1){
//     console.log("monday")
// }
// else if(daysName=== 2){
//     console.log("tuesday")
// }
// else if(daysName=== 3){
//     console.log("wednesday")
// }
// else if(daysName=== 4){
//     console.log("thursday")
// }
// else if(daysName===5){
//     console.log("friday")
// }
// else if(daysName=== 6){
//     console.log("satuarday")
// }else{
//     console.log("Not Available")
// }

// let days = ["monday","tuesday", "wednesday","thursday","friday","saturday","sunday"];
// let userInput = +prompt("Enter Your Number");

// let userUpdateInput = userInput-1;



// if(userUpdateInput< 0 || userUpdateInput>=days.length){
//     console.log("invalid days number")
// }

// else{
//     console.log("Day is :"+ days[userUpdateInput])
// }

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// let userInput = +prompt("Enter day number (1 to 7)");

// // user input ko array index mein convert karna
// let index = userInput - 1;

// // validation
// if (index < 0 || index >= days.length) {
//     console.log("Invalid day number");
// } else {
//     console.log("Day is:", days[index]);
// }


// Q1 
// let days = ["monday","tuesday", "wednesday","thursday","friday","saturday","sunday"];

// let userInput  = +prompt("Enter day number (1-7)");

// let index = userInput-1;

// if(index < 0 || index > days.length){
//     console.log("please enter between 1-7 number")
// }else {
//     console.log("day is :"+ days[index])
// }


// Q2 

// let months = ["january", "feberuary", "march", "april", "may", "june", "july", "august", "sepetember", "october", "november", "december"];
// let userInput = +prompt("enter month number (1-12");

// let index = userInput - 1;

// if (index < 0 || index > months.length) {
//     console.log("please enter valid number (1-12)")
// }
// else {
//     console.log("month is :" + months[index])
// }

// Q3 

// let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// let userInput = +prompt("Enter day number (1-7)")


// let index = userInput - 1;

// let even = index % 2;

// if (index === even) {
//     console.log("even index ,"+"the day is :"+ days[index])
// }
// else if (index !== even) {
//     console.log("odd index day ,"+"the day is :"+ days[index])
// }
// else {
//     console.log("Not Available")
// }

let price = +prompt("enter your gift price")
let userAmount= +prompt("enter your amount")

// let roundBill = Math.ceil(price)
// let roundBill = Math.floor(price)
let roundBill = Math.round(price)

let remaining = userAmount- roundBill;
console.log(remaining)


