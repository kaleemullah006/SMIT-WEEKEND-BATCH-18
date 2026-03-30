// let myPromise = new Promise (function(resolve,reject){
//     resolve("Data mil gaya")
// })

// myPromise.then(function(result){
//     console.log(result)
// })

// let myPromise = new Promise (function(resolve,reject){
//     resolve("Home work complete")
// })

// myPromise.then(function(result){
//     console.log(result)
// })

// let myPromise = new Promise (function(resolve,reject){
//     resolve("hello ")
// })

// myPromise
// .then(function(result){
//     console.log(result)
//     return result + "world "
// })
// .then(function(result2){
//     console.log(result2)
//     return result2 + "!"
// })
// .then(function(finalResult){
//     console.log(finalResult)
// })
// .catch(function(error){
//     console.log(error, + "kaam nahi huwa")
// })


let myPromise = new Promise (function(resolve,reject){
    resolve(10)
})

myPromise
.then(function(result){
    console.log(result)
    return result * 2
})
.then(function(result2){
    console.log(result2)
    return result2 + 5
})
.then(function(finalResult){
    console.log(finalResult)
})
.catch(function(error){
    console.log(error, + "error agaya")
})

