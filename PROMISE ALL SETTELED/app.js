// let promise1 = new Promise(function(resolve, reject){
//     resolve(10)
// })
// let promise2 = new Promise(function(resolve, reject){
//     reject("error")
// })
// let promise3 = new Promise(function(resolve, reject){
//     resolve(30)
// })

// Promise.allSettled([promise1,promise2, promise3])
// .then(function(results){
//     console.log(results)
// })

// let total = 0;
// let promise1 = new Promise(function(resolve, reject){
//     resolve(10)
   
// })
// let promise2 = new Promise(function(resolve, reject){
//     reject("error")
    
// })
// let promise3 = new Promise(function(resolve, reject){
//     resolve(30)
  
// })


// Promise.allSettled([promise1,promise2, promise3])

// .then(function(results,){
//     console.log(results,)
//     console.log(total)
//     results.forEach(function(item){
//         if(item.status === "fulfilled"){
//             total += item.value
//         }
//     })
//     console.log("total:"+ total)
// })

// let promise1 = new Promise(function(resolve, reject){
//     resolve(10)
   
// })
// let promise2 = new Promise(function(resolve, reject){
//     reject("error")
    
// })
// let promise3 = new Promise(function(resolve, reject){
//     resolve(30)
  
// })


// Promise.allSettled([promise1,promise2, promise3])

// .then(function(results,){
//     console.log(results,)
    
//    let total = results.reduce(function(sum,item){
//     if(item.status === "fulfilled"){
//        return sum + item.value
//     }
//     else{
//         return sum
//     }
//    },0)
//    console.log(total)
// })





