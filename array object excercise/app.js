
// let users = [
//   { fullName: "Ali", age: 17 },
//   { fullName: "Sara", age: 19 },
//   { fullName: "Usman", age: 25 },
//   { fullName: "Hina", age: 16 },
// ];
// let adults = []

// for (let i = 0 ; i<users.length; i++){
//     let user = users[i];
//     if (user.age >= 18)
//         adults.push(users[i])

// }
// console.log("Adults ==>", adults)


// let users = [
//   { fullName: "Ali", age: 17 },
//   { fullName: "Sara", age: 19 },
//   { fullName: "Usman", age: 25 },
//   { fullName: "Hina", age: 16 },
// ];
// let teenAgers = []

// for (let i = 0 ; i<users.length; i++){
//     let user = users[i];
//     if (user.age >= 13 && user.age < 19)
//         teenAgers.push(users[i])

// }
// console.log("teenAgers ==>", teenAgers)


// let users = [
//   { fullName: "Ali", age: 17 },
//   { fullName: "Sara", age: 19 },
//   { fullName: "Usman", age: 25 },
//   { fullName: "Hina", age: 16 },
// ];
// let eligibleUsers  = []

// for (let i = 0 ; i<users.length; i++){
//     let user = users[i];
//     if (user.age >= 18 && user.country === "pakistan")
//         eligibleUsers.push(users[i])

// }
// console.log("eligibleUsers==>", eligibleUsers)


// let users = [
//     { fullName: "Ali", age: 17 },
//     { fullName: "Sara", age: 19 },
//     { fullName: "Usman", age: 25 },
//     { fullName: "Hina", age: 16 },
// ];
// let teenAgers = []
// let adults = [];


// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (user.age >= 13 && user.age <= 19)
//         teenAgers.push(user)
//     if (user.age >= 20 )
//         adults.push(user)

// }
// console.log("teenAges", teenAgers)
// console.log("adults", adults)


let users = [
  { fullName: "Ali Khan", age: 17, country: "Pakistan" },
  { fullName: "Sara Malik", age: 19, country: "USA" },
  { fullName: "Usman Ali", age: 25, country: "UK" },
  { fullName: "Hina Iqbal", age: 16, country: "Pakistan" },
  { fullName: "Ahmed Raza", age: 22, country: "Canada" },
  { fullName: "Ayesha Noor", age: 18, country: "Pakistan" },
  { fullName: "Zain Ahmed", age: 21, country: "India" },
  { fullName: "Fatima Zahra", age: 15, country: "Pakistan" },
  { fullName: "Bilal Sheikh", age: 30, country: "Australia" },
  { fullName: "Maryam Abbas", age: 20, country: "Pakistan" },
  { fullName: "Saad Butt", age: 17, country: "UK" },
  { fullName: "Nida Hussain", age: 24, country: "USA" },
  { fullName: "Asad Ali", age: 27, country: "Pakistan" },
  { fullName: "Kiran Shah", age: 16, country: "India" },
  { fullName: "Danish Khan", age: 19, country: "Pakistan" },
  { fullName: "Sana Javed", age: 21, country: "Canada" },
  { fullName: "Iqra Aziz", age: 26, country: "Pakistan" },
  { fullName: "Owais Ahmed", age: 23, country: "Pakistan" },
  { fullName: "Hamza Farooq", age: 18, country: "USA" },
  { fullName: "Anum Tariq", age: 20, country: "Pakistan" }
];

let freeUsers = []
let paidUsers = [];


for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.age >= 13 && user.age <= 19 && user.country === "Pakistan")
        freeUsers.push(user)
    if (user.age >= 20 && user.country === "Pakistan")
        paidUsers.push(user)

}
console.log("freeUsers =>", freeUsers)
console.log("paidusers => ", paidUsers)







