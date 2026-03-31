// // async function getNumber() {
// //     let promise = new Promise (function(resolve, reject){
// //         resolve(50)
// //     })
// //     let result = await promise

// //     console.log(result)


// // }

// // getNumber()

// // async function getNumber() {
// //     try {
// //         let promise = new Promise (function(resolve, reject){
// //             resolve(50)
// //             // reject ("error agaya hai")
// //         })
// //         let result = await promise;

// //         // let result2 = result + 10

// //         result += 10

// //         console.log(result)

// //     } catch (error) {
// //         console.log("error agya")
// //     }
// // }

// // getNumber()

// async function checkPass() {
//     try {
//         let promise = new Promise(function(resolve, reject){

//             let value = "pass";
//             if (value === "pass") {

//                 resolve(" you passed")
//             } else {
//                 reject("you failed")
//             }

//         });

//         let result = await promise

//         console.log(result)

//     } catch (error) {
//         console.log(error)
//     }
// }

// checkPass()

// // async function doubleNumber() {
// //     try {
// //         let promise = new Promise(function(resolve, reject){
// //             resolve(5)
// //         })

// //         let result = await promise 

// //         result *= 2
// //         // console.log(result)
// //         result *= 3

// //         console.log(result)

// //     } catch (error) {
// //         console.log("error agaya hai")
// //     }
// // }

// // doubleNumber()

// let p1 = new Promise(function (resolve, reject) {
//     resolve(10)
// })

// let p2 = new Promise(function (resolve, reject){
//     resolve(20)
// })
// let p3 = new Promise(function (resolve, reject){
//     resolve(30)
// })

// Promise.all([p1,p2,p3])
// .then(function(finalresult){
//     console.log(finalresult)
// })

// async function getAllData() {
//     let p1 = new Promise(function(resolve,reject){
//         resolve("A")
//     })
//     let p2 = new Promise(function(resolve,reject){
//         resolve("B")
//     })
//     let p3 = new Promise(function(resolve,reject){
//         resolve("C")
//     })

//     let result = await Promise.all([p1,p2,p3])
    
//     console.log(result)
// }
// getAllData()
// async function multiply () {
    
//     let p1 = new Promise (function(resolve, reject){
//         resolve(2)
//     })
//     let p2 = new Promise (function(resolve, reject){
//         resolve(3)
//     })
//     let p3 = new Promise (function(resolve, reject){
//         resolve(4)
//     })

//     let result = await Promise.all([p1, p2 ,p3])

// //    let final = result[0] * result[1]* result[2];

// let final = result.reduce(function(acc, value){
//     return acc * value
// })

//     console.log(final)
// }

// multiply()

// let arr = [5,10,15,20]

// let number = arr.reduce(function(acc, value){
//     return acc + value
// })

// console.log(number)

// let arr = [ 1,2,3,4];

// let product = arr.reduce(function(acc , value){
//     return acc * value 
// })

// console.log(product)

// let arr = [ 1,2,3,4,5]

// let result = arr.reduce(function(acc , value){
//     if (value % 2 === 0 ){
//     return acc + (value + 10)
//     }
//     else{
//       return  acc + (value * 2)
//     }
    
// },0)
//  console.log(result)

let arr = [2,4,6]

let result = arr.reduce(function(acc, value){
    if (value % 2 === 0){
        return acc + (value * 3)
    }
},0)
 console.log(result)
