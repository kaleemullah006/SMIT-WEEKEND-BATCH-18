// FUNCTION + IF 

// function checkNumber(num , operator) {
//     if(operator === "*") return multiply(num)
//       if (operator === "/")  return division (num)

// }
//  checkNumber(5, "*")


// function calculate(a, b , type) {
//     if (type === "+") return addition(a,b)
//         if(type === "-") return subtraction (a,b)
//             if (type === "*") return multiply (a,b)
// }

// const result = calculate(2,5, "+")

// console.log(result)

// PRACTICE A 

// function userType(age) {
//     if (age >= 18){
//         console.log("adult")
//     }
//     if(age < 18 ){
//         console.log("minor")
//     }

// }
// userType(16)
// userType(19)

// function loginStatus(isActive, isPaid) {
//   if (isActive=== true && isPaid === true){
//     console.log("Premium access")
//   }else{
//     console.log("free access")
//   }
// }
// loginStatus(false, true)
// loginStatus(false, false )
// loginStatus(true, true )

// function discount(price, type) {
//   if (type === "student"){
//     return price - (price * 20 / 100)
// }
//   if (type === "senior"){
//      return price - (price * 30 / 100)
//   }

//   return price
// }

// console.log(discount(100, "student"))
// console.log(discount(100, "senior"))
// console.log(discount(100, "kaleem"))

///////////////////////////////// 
// practice 1 

// function shippingCost(amount) {
//   if (amount >= 5000){
//     return 0
//   }
//   if (amount <= 5000){
//     return 300
//   }
// }
// console.log(shippingCost(500))
// console.log(shippingCost(5001))

// practice 2 

// function examResult(marks) {
//    if(marks >= 80){
//     return "A"
//    }
//    if(marks >= 60 && marks <=79){
//     return "B"
//    }
//    if(marks < 60){
//     return "Fail"
//    }
// }
// console.log(examResult(87))
// console.log(examResult(67))
// console.log(examResult(55))

// practice 3


// function getUserType(age, isPaid) {
//    if(age >= 18 && isPaid=== true){
//     return "premium adult"
//    }
//    if(age >= 18 && !isPaid=== true){
//     return "free Adult"
//    }
//    else {
//     return "Minor"
//    }
// }

// console.log(getUserType(20, true ))
// console.log(getUserType(20, false ))
// console.log(getUserType(16, false ))

// function getDiscount(age, isStudent) {
//   if(age < 18){
//     return "50%"
//   }
//   if(age >= 18 && isStudent === true){
//     return "30%"
//   }
//   return "10%"
// }
// console.log(getDiscount(16))
// console.log(getDiscount(20, true))
// console.log(getDiscount(20))

// function getUserLevel(age, isActive, isPaid) {
// if(age < 18 ){
//     return "Minor"
// }
// if(age >= 18 && isActive && isPaid ){
//     return "Premium"
// }
// if(age >= 18 && isActive && !isPaid ){
//     return "Free"
// }
// return "Blocked"
// }

// console.log(getUserLevel(17))
// console.log(getUserLevel(19))
// console.log(getUserLevel(19, true , true))
// console.log(getUserLevel(19, true , false))
// console.log(getUserLevel(19, false , false))

// function canAccessDashboard(user) {
//     // user = { age, isActive, role }
//     if (user.role === "admin") return "allow"
//     if (user.age >= 18 && user.isActive === true && user.role === "user") return "allow"

//         return "deny"

// }

// console.log(
//     canAccessDashboard({age:19,isActive:true, role:"admin"}))
// console.log(
//     canAccessDashboard({age : 19, isActive:false,role: "admin"}))
// console.log(
//     canAccessDashboard({age : 19, isActive:false,role: "user"}))
// console.log(
//     canAccessDashboard({age:15, isActive:false, role : "user"}))

// function getUserDashboard(user) {
//     if (user.user === "admin") return "Admin Panel"

//     if (user.user === "admin" && user.isActive === true) return "User Dashboard"

//     if (user.user === "admin" && user.inActive === true) return "Account Blocked"

//     if (user.age < 18) return "Not Allowed"
// }

// console.log(getUserDashboard({ user: "admin" }))
// console.log(getUserDashboard({ user: "admin", isActive: true }))
// console.log(getUserDashboard({ user: "admin", inActive: true }))
// console.log(getUserDashboard({ age: 17 }))

// function canPurchaseCourse(user) {
//     if (user.age < 18) return "Not Allowed"

//     if (user.isActive && user.isPaid) return "Access Granted"

//     if (user.isActive && user.isPaid === false) return "Please Update"

//     if (user.isActive === false) return "Account Blocked"
// }

// console.log(canPurchaseCourse({ age: 0 }))
// console.log(canPurchaseCourse({ isActive: true, isPaid: true }))
// console.log(canPurchaseCourse({ isActive: true, isPaid: false }))
// console.log(canPurchaseCourse({ isActive: false }))


// function currentTime(time) {
//     let now = new Date ()
//     document.write(now)

// }
// currentTime()


// function fullName(firstName, lastName) {
//     return firstName + lastName
// }

// console.log(fullName("hello " + "kaleem ", "ullah"))

function sum(num1, num2) {
    return num1+ num2 
}

let input1 = +prompt("enter your first number")
let input2 = +prompt("enter your second  number")

console.log(sum(input1,input2))
