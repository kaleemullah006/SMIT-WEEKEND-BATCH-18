// function jitTest(){
//     var x = 5
//     let y = 10
//     const z = 15
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// jitTest()

// let greet = "hello"

// function sayHello(){
//     let name = "haniya"
//     console.log(greet + " " + name)
// }

// sayHello()
// console.log(greet)
// console.log(name)


// function a(){
//    setTimeout(() => {
    
//        console.log("A")
//    }, 2000); 
// }
// function b (){
//     setTimeout(() => {
//         a()
        
//         console.log("B")
//     }, 2000);
// }
// function c(){
//     setTimeout(() => {
//        b()
    
//        console.log("C")
//    }, 2000); 
// }
// setTimeout(() => {
    
//     c()
// },2000);

// let arr = ["apple", "banana"]

// let newArr = arr[Symbol.iterator]()

// console.log(newArr.next())
// console.log(newArr.next())
// console.log(newArr.next())


// let cities = ["karachi", "peshawar", "lahore", "islamabad"]

// // for (let city of cities){
// //     console.log(city)
// // }

// let city = cities[Symbol.iterator]()

// console.log(city.next())
// console.log(city.next())
// console.log(city.next())
// console.log(city.next())
// console.log(city.next())


// let cities = ["karachi", "peshawar", "lahore", "islamabad"]

// for (let city of cities){
//     console.log(city)
// }


// let number = {
//     start: 5,
//     end: 7,
//     [Symbol.iterator](){
//         let current = this.start;
//         let last = this.end;


//         return{
//             next(){
//                 if (current <= last) {
//                     return {value: current++ , done:false}
//                 } else {
//                     return {done:true}
//                 }
//             }
//         }

//     }
// }

// for(let num of number){
//     console.log(num)
// }

let number = {
    start:12 ,
    end: 16,

    [Symbol.iterator](){
        let current = this.start
        let last  = this.end

        return{
            next(){
                if (current <= last) {
                    return {value: current++ , done:false}
                } else {
                    return{done:true}
                }
            }
        }
    }
}

for(let num of number){
    console.log(num)
}