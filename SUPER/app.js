// // class Animal {
// //     constructor(name){
// //         this.name = name
// //     }
// // }

// // class Dog extends Animal {
// //     constructor(name, sound){
// //      super(name)
// //      this.sound = sound
// //     }
// // }

// // let d1 = new Dog("Tommy", "Bark")

// // console.log(d1.name)
// // console.log(d1.sound)


// // class Person {
// //     constructor(name){
// //         this.name = name
// //     }
// // }

// // class Teacher extends Person {
// //     constructor(name, subject){
// //         super(name)
// //         this.subject = subject
// //     }
// // }

// // class SchoolTeacher extends Teacher {
// //     constructor(name, subject, school){
// //         super(name, subject)

// //         this.school = school
// //     }
// // }

// // let t1 = new SchoolTeacher("Ali", "Math", "City School")

// // console.log(t1.name)
// // console.log(t1.subject)
// // console.log(t1.school)

// class person {
//     constructor(name) {
//         this.name = name
//     }
// }

// class teacher extends person{
//     constructor(name, subject){
//     super(name)
//     this.subject = subject
// }
// teach (){
//     console.log(this.name +  " teach " + this.subject)
// }
// }

// let t1 = new teacher("ali", "math")

// t1.teach()

// class shape {
//     draw(){
//         console.log("drowing shape")
//     }
// }

// class circle extends shape{
//     draw(){
//         console.log("drowing circle")
//     }
// }

// let c = new circle()

// c.draw()

class User {
    #password

    constructor(password){
        this.#password = password
    }

    checkPassword(p){
     if(this.#password === p){
       return("correct")
     }
     else{
        return ("wrong")
     }
        
    }
}

let u = new User("1234")

console.log(u.checkPassword("1234")) // Correct
console.log(u.checkPassword("0000")) // Wrong