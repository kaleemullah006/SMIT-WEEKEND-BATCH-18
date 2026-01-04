

// let student = {
//     fullName : "kaleem ullah",
//     age : 26,
//     country  : "Pakistan"
// }

// console.log(student.age)
// console.log(student.country)
// console.log(student.fullName)


// let student = {
//     fullName : "kaleem ullah",
//     age : 26,
//     country  : "Pakistan"
// }
// student.email= "kkkhdha@gmail.com"
// student.isActive= true
// student.age = 28


// console.log(student.age)
// console.log(student.country)
// console.log(student.fullName)
// console.log(student.email)
// console.log(student.isActive)

// let students = [
//     {fullName:"ayan", age : 25, country: "Pakistan", isActive: true},
//     {fullName:"umar", age : 20, country: "Pakistan", isActive: false},
//     {fullName:"kaleem", age : 21, country: "Pakistan", isActive: true},
//     {fullName:"salman", age : 21, country: "Pakistan", isActive: true},
//     {fullName:"ahmad", age : 21, country: "Pakistan", isActive: false},
// ]
// let activeStudents = []

// for (let i = 0 ; i< students.length; i++)
// if(students[i].isActive === true)
//     activeStudents.push(students[i])


// console.log("students ==>", students)
// console.log("activestudents ==>", activeStudents)

// let students = [
//     {fullName:"ayan", age : 25, country: "Pakistan", isActive: true},
//     {fullName:"umar", age : 20, country: "Pakistan", isActive: true},
//     {fullName:"kaleem", age : 21, country: "Pakistan", isActive: true},
//     {fullName:"salman", age : 21, country: "Pakistan", isActive: true},
//     {fullName:"ahmad", age : 21, country: "Pakistan", isActive: false},
// ]
// let filterStudents = []

// for (let i = 0 ; i< students.length; i++)
// if(students[i].isActive === true && students[i].age >= 21)
//     filterStudents.push(students[i])


// console.log("students ==>", students)
// console.log("filterstudents ==>", filterStudents)


let students = [
    { fullName: "ayan", age: 25, country: "Pakistan", isActive: true },
    { fullName: "umar", age: 20, country: "Pakistan", isActive: true },
    { fullName: "kaleem", age: 21, country: "Pakistan", isActive: true },
    { fullName: "salman", age: 21, country: "Pakistan", isActive: true },
    { fullName: "ahmad", age: 21, country: "Pakistan", isActive: false },
]
let filterStudents = []

for (let i = 0; i < students.length; i++){

    let student = students[i]
    if (student.isActive === true && student.age >= 21 && student.country === "Pakistan"){

        student.courseType = "Paid";
        filterStudents.push(student)
        
    }
    
}
    
    console.log("students ==>", students)
    console.log("filterstudents ==>", filterStudents)
    
