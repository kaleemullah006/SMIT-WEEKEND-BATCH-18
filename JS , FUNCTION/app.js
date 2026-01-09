// FUNCTION 

// function helloSay(){
//     console.log("hello world")
// }
// helloSay()


// function helloSay(name){
//     console.log("hello " + name)
// }
// helloSay("kaleem")
// helloSay("Ali")

// function add(num1 , num2) {
//     return(num1+ num2)
// }
// let result = add(535,45)
// console.log(result)

// function isEligible(student) {
//     if (student.age >= 21 && student.isActive === true) {
//         return "Eligible";
//     } else {
//         return "Not Eligible";
//     }
// }
// let student1 = { age: 25, isActive: true };
// console.log(isEligible(student1));


// Q1 

// function name(name) {
//     console.log("my name is "+ name)

// }
// name("kaleem ullah")

// Q2 

// function square (){
//     console.log(25/5)
// }

// square()

// Q1 

// function checkAge(age){


//     if(age >= 18){
//         console.log("adult")
//     }
//     if (age < 18){
//         console.log("minor")
//     }
// }
// checkAge(22)
// checkAge(12)

// Q2 

// function number(num1,num2) {
//     return(num1-num2)
// }
// console.log(number(25,55))

// Q1 

// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log("Even")

//     }
//     if (num %2 != 0) {
//         console.log("odd")
//     }
// }
// isEven(5)
// isEven(8)
// isEven(11)

// function checkLogin(isActive) {
//     if (isActive === true) {
//         console.log("log in")
//     }
//     if (isActive!= true) {
//         console.log("blocked")
//     }
// }

// checkLogin(true)
// checkLogin(false)


// function courseType(age) {
//     if (age >= 21) {
//         console.log("paid")
//     }
//     if (age< 21) {
//         console.log("free")
//     }
// }

// courseType(21)
// courseType(16)


// function checkUser(age , isActive) {
//     if(age >= 18 && isActive === true){

//         console.log("allow")
//     }else {
//         console.log("Not Allow")
//     }
// }
// checkUser(18, false)
// checkUser(18, true)
// checkUser(14, true)

// function calculateDiscount(age, isMember) {
//    if (age >= 60 || isMember) {
//        console.log("10% Discount")

// }else{
//     console.log("No Discount")
// }
// }
// calculateDiscount(55, true)
// calculateDiscount(66, false)
// calculateDiscount(66, true)

// function checkAccess(age , iSiD) {
//     if (age >= 18 && iSiD) {
//         console.log("Access Granted")
//     } else {
//         console.log("Access Denied")
//     }
// }

// checkAccess(17, true)
// checkAccess(19, true)
// checkAccess(20, false)

// function checkCourseEligibility(age, isActive, isPaid){
//     if (age >= 18 && isActive && isPaid) {
//         console.log("course Allowed")
//     }else {
//         console.log("Course Not Allowed")
//     }
// }
// checkCourseEligibility(17, true ,true)
// checkCourseEligibility(20, false ,true)
// checkCourseEligibility(20, true,false)
// checkCourseEligibility(20, false,false)
// checkCourseEligibility(20, true,true)

// function isAdult(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isAdult(20)) // true
// console.log(isAdult(15)) // false

// function canLogin(isActive) {
//    if (isActive === true) {
//     return true
//    } else {
//     return false
//    }
// }

// console.log(canLogin(true))   // true
// console.log(canLogin(false))  // false

// function courseAllowed(age, isPaid) {
//     if (age >= 18 && isPaid) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(courseAllowed(20, true))   // true
// console.log(courseAllowed(20, false))  // false
// console.log(courseAllowed(16, true))   // false

// function hasPremiumAccess(age, isActive, country) {
//    return age >= 21 && isActive && country === "Pakistan"
// }

// console.log(hasPremiumAccess(22, true, "Pakistan"))   // true
// console.log(hasPremiumAccess(22, false, "Pakistan"))  // false
// console.log(hasPremiumAccess(22, true, "USA"))        // false
// console.log(hasPremiumAccess(18, true, "Pakistan"))   // false


// let users = [
//     { name: "Ali", age: 22, isActive: true, country: "Pakistan" },
//     { name: "Sara", age: 19, isActive: true, country: "Pakistan" },
//     { name: "John", age: 25, isActive: true, country: "USA" },
//     { name: "Usman", age: 30, isActive: false, country: "Pakistan" },
//     { name: "Ayesha", age: 24, isActive: true, country: "Pakistan" }
// ];


// function getPremiumUsers(age, isActive, country) {
//     let primiumUsers = []
//     for (let i = 0; i < users.length; i++) {

//         let user = users[i]

//         if (user.age >= 21 && user.isActive === true && user.country === "Pakistan"){

//             primiumUsers.push(user)
//         }
//         }
// return primiumUsers
// }

// console.log(getPremiumUsers(users));

// let users = [
//   { name: "Ali", isActive: true },
//   { name: "Sara", isActive: false },
//   { name: "Usman", isActive: true }
// ];

// function getActiveUsers(isActive) {
//     let activeUsers = []

//     for (let i = 0; i < users.length; i++) {
//         let user = users[i]
//         if (user.isActive) {
//             activeUsers.push(user)

//         }

//     }

//     return activeUsers
// }

// console.log(getActiveUsers(users))


// let users = [
//     { name: "Ali", age: 22, isActive: true, country: "Pakistan" },
//     { name: "Sara", age: 19, isActive: true, country: "Pakistan" },
//     { name: "John", age: 25, isActive: true, country: "USA" },
//     { name: "Usman", age: 30, isActive: false, country: "Pakistan" },
//     { name: "Ayesha", age: 24, isActive: true, country: "Pakistan" }
// ];


// function getFreeUsers(age, isActive) {
//     let freeUsers = []

//     for (let i = 0; i < users.length; i++) {
//         let user = users[i]

//         if (user.age <= 18 && isActive) {
//             freeUsers.push(user)
//         }
//     }

//     return freeUsers
// }

// console.log(getFreeUsers(users))


// let users = [
//   { name: "Ali", isActive: true },
//   { name: "Sara", isActive: false },
//   { name: "Usman", isActive: true }
// ];

// function getActiveUsers(users) {
//     let activeUsers = []

//     for (let i = 0; i < users.length; i++) {
//         let user = users[i]
//         if (user.isActive) {
//             activeUsers.push(user)

//         }

//     }

//     return activeUsers
// }

// console.log(getActiveUsers(users))


// let users = [
//     { name: "Ali", age: 22, isActive: true, country: "Pakistan" },
//     { name: "Sara", age: 19, isActive: true, country: "Pakistan" },
//     { name: "John", age: 25, isActive: true, country: "USA" },
//     { name: "Usman", age: 30, isActive: false, country: "Pakistan" },
//     { name: "Ayesha", age: 24, isActive: true, country: "Pakistan" }
// ];


// function getFreeUsers(users) {
//     let freeUsers = []

//     for (let i = 0; i < users.length; i++) {
//         let user = users[i]

//         if (user.age <= 20 && user.isActive===true) {
//             freeUsers.push(user)
//         }
//     }

//     return freeUsers
// }

// console.log(getFreeUsers(users))


// let users = [
//     { name: "Ali", age: 22, isActive: true, country: "Pakistan" },
//     { name: "Sara", age: 19, isActive: true, country: "Pakistan" },
//     { name: "John", age: 25, isActive: true, country: "USA" },
//     { name: "Usman", age: 30, isActive: false, country: "Pakistan" },
//     { name: "Ayesha", age: 24, isActive: true, country: "Pakistan" }
// ];

// function countryCheck(users) {
//     let pakCountry = []
// for (let i = 0; i < users.length; i++) {
//     let user = users[i]
    
//     if (user.country=== "Pakistan") {
//         pakCountry.push(user)
//     }
// }
// return pakCountry
// }


// console.log(countryCheck(users))


// let users = [
//     { name: "Ali", age: 22, isActive: true, country: "Pakistan" },
//     { name: "Sara", age: 19, isActive: true, country: "Pakistan" },
//     { name: "John", age: 25, isActive: true, country: "USA" },
//     { name: "Usman", age: 30, isActive: false, country: "Pakistan" },
//     { name: "Ayesha", age: 24, isActive: true, country: "Pakistan" }
// ];
// let activePakistani = []

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.country === "Pakistan" && user.isActive === true) {
//         activePakistani.push(user)
//     } 
  
// }
// console.log(activePakistani)