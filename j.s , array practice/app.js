

// FOR LOOP IN ARRAY PRACTICE .....

// for (let i = 0; i <= 10 ; i++){
//     console.log("hello world");
// }


// var arr = [10,20,30,40,50,60,70,80,90,100];

// for (let i = 0; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// var arr = ["apple", "banana", "grapes", "mango", "orange", "peach"];
// var flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "banana")
//     flag = true;
//     }
//     if (flag){
//         console.log("banana found");
//     } else {
//         console.log("not found")
//     }

// let arr = ["apple", "mango", "orange", "peach", "ahmad", "umer", "ali"];
//  var flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "umar"){

//         flag = true;
//     }


// }
//     if (flag) {
//         console.log("umar found")
//     } else {
//         console.log("umar not found")
//     }

// let arr = ["abubakr", "farooq", "usman", "ali"]
// let isPossible = false;

// for (let i = 0 ; i < arr.length ; i++){
//     if(arr[i] === "irfan"){
//         isPossible = true; 
//     }
// }
// if(isPossible){
//     console.log("abubakar is there")
// }else {
//    console.log("abubakar is not here")
// }

// let arr = ["ahmad", "umer", "ali", "hassan", "hussain"];
// let found = false;
// for (let i = 0 ; i < arr.length ; i++){
//     if(arr[i] === "umar"){
//         found = true ;

//     }
// }
// if (found){
//     console.log("umar zinda bad")
// }
// else {
//     console.log("umar khalifa e doum")
// }

// let ar = ["html", "css", "js", "react", "node", "express"];
// let available = "no";

// for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === "node") {
//         available = "yes";
//     }
// }
// if (available === "yes") {
//     console.log("node is available")
// } else {

//     console.log("node not available")
// }

let array = ["red", "green", "blue", "yellow", "black", "white"];
let isPossible = "no"

// for(let  i = 0 ; i < array.length; i++){
//     if (array[i] === "black"){
//         isPossible = "yes";
//         console.log("black is available")


//     }
// }
// if (isPossible === "no"){
//     console.log("black is not available")

// }

// palindrome word check 
// let palindromeWord = ["madam", "racecar", "level", "radar", "civic", "rotor", "kayak", "reviver", "madam", "refer", "deified", "noon", "stats", "tenet", "wow"];

// let word = prompt("Enter the palindrome word")
// let flag = false;

// for ( let i = 0 ; i < palindromeWord.length ; i++){
//     if(palindromeWord[i] === word){
//         flag = true;
//         }

//     }
//     if(flag){
// console.log("palindrome word found")
//     }else {
//         console.log("palindrome word not found")

//     }

// palindrome word check 2 

// let palindrome = ["madam", "racecar", "level", "radar", "civic", "rotor", "kayak", "reviver", "madam", "refer", "deified", "noon", "stats", "tenet", "wow"];

// let word = prompt("enter palindrome word")

// let flag = false;

// for (let i = 0; i < palindrome.length; i++) {
//     if (palindrome[i] === word) {

//         flag = true;
//     }
// }
// if(flag){
//     console.log("palidrome word found")
// }else {
//     console.log("palindrome word not found")
// }

//  let str = [2,4,5,6 ,7,8,33,55,65]
// let min = str[1]
// for (let i =0 ; i < str.length; i ++){
//     if (str[i] < min){
//         min = str[i]
//     }
// }
// console.log(min)

// let all = [5,5,5,4,3,32,55,66,7,7,7,34,5]
// let min = all[2]

// for (let i = 0 ; i< all.length; i++){
//     if (all[i] > min){
//         min = all[i]
//     }
// } console.log(min)

// question ghous sir ....

// var names = ["ahmad", "umer", "ali", "hassan", "hussain"]
// names.splice(0, 1, "hussain")
// console.log(names);
// names.splice(4, 1, "ahmad")
// console.log(names);
// 


// let arr = [[1,2,3], [4,5,6]];

// for(let i = 0  ; i < arr.length; i++ ){
//     for (let j=0; j< arr[i].length; j++ ){
//         console.log(arr[i][j])
//     }

// }

// var arr = [["ahmad", "danial","zain"],["ali", "haroon"]];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])

//     }
// }

// changing case .......

// var fullName = ["ahmad", "umer", "ali", "hassan", "hussain"]
// var searchName = prompt("enter your name").toLowerCase();

// if (fullName.includes(searchName)){
//     console.log("name found")
// }else {
//     console.log("name not found")
// }

// table of number ....... 

// var num = prompt("enter a number and found a table");

// // var num = 2;
// for (let i = 1; i <= 10; i++) {
//     // console.log(i + "x" + num + "=" + (num * i))
//     document.write(i + "x" + num + "=" + (num * i) + "<br>")
// }