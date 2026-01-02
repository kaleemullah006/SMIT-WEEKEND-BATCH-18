// // JS Assignment 08 / Filter Our teenagers

// let users = [
//     { fullName: "Ali Khan", age: 17, country: "Pakistan" },
//     { fullName: "Ahmed Raza", age: 22, country: "Pakistan" },
//     { fullName: "Sara Malik", age: 19, country: "Pakistan" },
//     { fullName: "Ayesha Noor", age: 16, country: "Pakistan" },
//     { fullName: "Usman Ali", age: 25, country: "Pakistan" },
//     { fullName: "Hassan Khan", age: 14, country: "Pakistan" },
//     { fullName: "Zain Ahmed", age: 21, country: "Pakistan" },
//     { fullName: "Fatima Zahra", age: 18, country: "Pakistan" },
//     { fullName: "Bilal Sheikh", age: 30, country: "Pakistan" },
//     { fullName: "Hina Iqbal", age: 15, country: "Pakistan" },

//     { fullName: "Imran Khan", age: 45, country: "Pakistan" },
//     { fullName: "Maryam Abbas", age: 20, country: "Pakistan" },
//     { fullName: "Saad Butt", age: 17, country: "Pakistan" },
//     { fullName: "Nida Hussain", age: 24, country: "Pakistan" },
//     { fullName: "Asad Ali", age: 27, country: "Pakistan" },
//     { fullName: "Kiran Shah", age: 16, country: "Pakistan" },
//     { fullName: "Danish Khan", age: 19, country: "Pakistan" },
//     { fullName: "Sana Javed", age: 21, country: "Pakistan" },
//     { fullName: "Fahad Riaz", age: 17, country: "Pakistan" },
//     { fullName: "Iqra Aziz", age: 26, country: "Pakistan" },

//     { fullName: "Owais Ahmed", age: 23, country: "Pakistan" },
//     { fullName: "Mehak Ali", age: 14, country: "Pakistan" },
//     { fullName: "Hamza Farooq", age: 18, country: "Pakistan" },
//     { fullName: "Anum Tariq", age: 20, country: "Pakistan" },
//     { fullName: "Shahzaib Khan", age: 29, country: "Pakistan" },
//     { fullName: "Laiba Noor", age: 16, country: "Pakistan" },
//     { fullName: "Rizwan Ali", age: 35, country: "Pakistan" },
//     { fullName: "Maham Khalid", age: 19, country: "Pakistan" },
//     { fullName: "Waqas Ahmed", age: 41, country: "Pakistan" },
//     { fullName: "Sadia Ilyas", age: 17, country: "Pakistan" },

//     { fullName: "Umar Farooq", age: 22, country: "Pakistan" },
//     { fullName: "Noor Fatima", age: 15, country: "Pakistan" },
//     { fullName: "Adnan Sheikh", age: 28, country: "Pakistan" },
//     { fullName: "Bushra Rani", age: 18, country: "Pakistan" },
//     { fullName: "Kamran Akmal", age: 39, country: "Pakistan" },
//     { fullName: "Areeba Khan", age: 13, country: "Pakistan" },
//     { fullName: "Talha Qureshi", age: 21, country: "Pakistan" },
//     { fullName: "Hafsa Yousaf", age: 20, country: "Pakistan" },
//     { fullName: "Shan Ali", age: 17, country: "Pakistan" },
//     { fullName: "Rabia Anwar", age: 25, country: "Pakistan" },

//     { fullName: "Farhan Saeed", age: 34, country: "Pakistan" },
//     { fullName: "Aiman Khan", age: 19, country: "Pakistan" },
//     { fullName: "Noman Ijaz", age: 56, country: "Pakistan" },
//     { fullName: "Sidra Batool", age: 16, country: "Pakistan" },
//     { fullName: "Junaid Jamshed", age: 27, country: "Pakistan" },
//     { fullName: "Komal Rizvi", age: 22, country: "Pakistan" },
//     { fullName: "Arslan Haider", age: 18, country: "Pakistan" },
//     { fullName: "Huma Qureshi", age: 31, country: "Pakistan" },
//     { fullName: "Salman Akhtar", age: 17, country: "Pakistan" },
//     { fullName: "Nashit Khan", age: 24, country: "Pakistan" },

//     { fullName: "Yasir Shah", age: 38, country: "Pakistan" },
//     { fullName: "Eman Ali", age: 15, country: "Pakistan" },
//     { fullName: "Kashif Mehmood", age: 33, country: "Pakistan" },
//     { fullName: "Sumbul Iqbal", age: 21, country: "Pakistan" },
//     { fullName: "Zubair Ahmed", age: 18, country: "Pakistan" },
//     { fullName: "Anaya Khan", age: 14, country: "Pakistan" },
//     { fullName: "Muneeb Butt", age: 29, country: "Pakistan" },
//     { fullName: "Hoorain Fatima", age: 16, country: "Pakistan" },
//     { fullName: "Rehan Siddiqui", age: 40, country: "Pakistan" },
//     { fullName: "Iqbal Hussain", age: 52, country: "Pakistan" }
// ];

// let adults = [];

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//         adults.push(users[i])
//     } else {
//         console.log("not move")
//     }
// }
// console.log("users ==>", users)
// console.log("adults ==>", adults)


// practice 

let users = [
    { fullName: "Ali Khan", age: 17, country: "Pakistan" },
    { fullName: "Ahmed Raza", age: 22, country: "Pakistan" },
    { fullName: "Sara Malik", age: 19, country: "Pakistan" },
    { fullName: "Ayesha Noor", age: 16, country: "Pakistan" },
    { fullName: "Usman Ali", age: 25, country: "Pakistan" },
    { fullName: "Hassan Khan", age: 14, country: "Pakistan" },
    { fullName: "Zain Ahmed", age: 21, country: "Pakistan" },
    { fullName: "Fatima Zahra", age: 18, country: "Pakistan" },
    { fullName: "Bilal Sheikh", age: 30, country: "Pakistan" },
    { fullName: "Hina Iqbal", age: 15, country: "Pakistan" },

    { fullName: "Imran Khan", age: 45, country: "Pakistan" },
    { fullName: "Maryam Abbas", age: 20, country: "Pakistan" },
    { fullName: "Saad Butt", age: 17, country: "Pakistan" },
    { fullName: "Nida Hussain", age: 24, country: "Pakistan" },
    { fullName: "Asad Ali", age: 27, country: "Pakistan" },
    { fullName: "Kiran Shah", age: 16, country: "Pakistan" },
    { fullName: "Danish Khan", age: 19, country: "Pakistan" },
    { fullName: "Sana Javed", age: 21, country: "Pakistan" },
    { fullName: "Fahad Riaz", age: 17, country: "Pakistan" },
    { fullName: "Iqra Aziz", age: 26, country: "Pakistan" },

    { fullName: "Owais Ahmed", age: 23, country: "Pakistan" },
    { fullName: "Mehak Ali", age: 14, country: "Pakistan" },
    { fullName: "Hamza Farooq", age: 18, country: "Pakistan" },
    { fullName: "Anum Tariq", age: 20, country: "Pakistan" },
    { fullName: "Shahzaib Khan", age: 29, country: "Pakistan" },
    { fullName: "Laiba Noor", age: 16, country: "Pakistan" },
    { fullName: "Rizwan Ali", age: 35, country: "Pakistan" },
    { fullName: "Maham Khalid", age: 19, country: "Pakistan" },
    { fullName: "Waqas Ahmed", age: 41, country: "Pakistan" },
    { fullName: "Sadia Ilyas", age: 17, country: "Pakistan" },

    { fullName: "Umar Farooq", age: 22, country: "Pakistan" },
    { fullName: "Noor Fatima", age: 15, country: "Pakistan" },
    { fullName: "Adnan Sheikh", age: 28, country: "Pakistan" },
    { fullName: "Bushra Rani", age: 18, country: "Pakistan" },
    { fullName: "Kamran Akmal", age: 39, country: "Pakistan" },
    { fullName: "Areeba Khan", age: 13, country: "Pakistan" },
    { fullName: "Talha Qureshi", age: 21, country: "Pakistan" },
    { fullName: "Hafsa Yousaf", age: 20, country: "Pakistan" },
    { fullName: "Shan Ali", age: 17, country: "Pakistan" },
    { fullName: "Rabia Anwar", age: 25, country: "Pakistan" },

    { fullName: "Farhan Saeed", age: 34, country: "Pakistan" },
    { fullName: "Aiman Khan", age: 19, country: "Pakistan" },
    { fullName: "Noman Ijaz", age: 56, country: "Pakistan" },
    { fullName: "Sidra Batool", age: 16, country: "Pakistan" },
    { fullName: "Junaid Jamshed", age: 27, country: "Pakistan" },
    { fullName: "Komal Rizvi", age: 22, country: "Pakistan" },
    { fullName: "Arslan Haider", age: 18, country: "Pakistan" },
    { fullName: "Huma Qureshi", age: 31, country: "Pakistan" },
    { fullName: "Salman Akhtar", age: 17, country: "Pakistan" },
    { fullName: "Nashit Khan", age: 24, country: "Pakistan" },

    { fullName: "Yasir Shah", age: 38, country: "Pakistan" },
    { fullName: "Eman Ali", age: 15, country: "Pakistan" },
    { fullName: "Kashif Mehmood", age: 33, country: "Pakistan" },
    { fullName: "Sumbul Iqbal", age: 21, country: "Pakistan" },
    { fullName: "Zubair Ahmed", age: 18, country: "Pakistan" },
    { fullName: "Anaya Khan", age: 14, country: "Pakistan" },
    { fullName: "Muneeb Butt", age: 29, country: "Pakistan" },
    { fullName: "Hoorain Fatima", age: 16, country: "Pakistan" },
    { fullName: "Rehan Siddiqui", age: 40, country: "Pakistan" },
    { fullName: "Iqbal Hussain", age: 52, country: "Pakistan" }
];

let adults = [];

for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.age >= 18) {
        adults.push(user)
    }
}
console.log("users ",users)
console.log("adults", adults)