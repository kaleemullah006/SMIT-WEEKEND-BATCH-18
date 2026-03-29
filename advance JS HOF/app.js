// function greet (name){
//     return "hello"+ name
// }
// function processUser(callback){
//     console.log(callback("ali"))
// }
// processUser(greet)

// function double(y){
//     return y* 2
// }
// console.log(double(2))

// function doSomething(num, callback){
//   console.log(callback(num))
// }

// function triple(x){
//   return x * 3
// }

// doSomething(5,triple)

// function runTask(task){
//   task()
// }

// function sayHi(){
//   console.log("Hi!")
// }

// runTask(sayHi)

///////////// 

// function run(b){
//   b()
// }

// function greet(){
//   console.log("Hello Student")
// }

// run(greet)

// function execute(job){
//   console.log("Start")
//   job()
//   console.log("End")
// }

// function running (){
//     console.log("Task running")
// }

// execute(running)


// function calculate(num, action){
//   console.log(action(num))
// }

// function multiplyBy5(x){
//   return x * 5
// }

// // yahan function call karo
// calculate(10,multiplyBy5)
 
// function doWork(task){
//   console.log("Start")
//   if (task){
//     task()
//   }
//   console.log("End")
// }

// // const callback = ()=>{
// // console.log("learning callback")
// // }
// doWork(()=>{
//   console.log("Learning callback")
// })

// doWork()

// function run(){

//   console.log("No task provided")
// }
// run()

// function execute(task){
//   task()
  
// }
// function callback(){
//   console.log("please provide a function")

// }

// execute(callback)

//// 

// function execute(task){

//   if(task){
//     task()
//   } else {
//     console.log("Please provide a function")
//   }

// }

// execute() 
// // no callback

// execute(()=>{
//   console.log("Task running")
// })


// console.log("Start")

// setTimeout(() => {
//   console.log("finished")
// },2000);

// console.log("End")

// console.log(1)

// setTimeout(() => {
//   console.log(3)
 
// }, 1000);

// console.log(2)

// let mypromise = new Promise((resolve, reject)=>{
//  setTimeout(()=>{
//   resolve("Data Loaded")
//  }, 2000)
// })

// mypromise.then(result => {
//   console.log(result)
// })

// let myPromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Download Complete")
//   }, 2000)
// })

// myPromise.then(result =>{
// console.log(result)
// });

// let mypromise = new Promise((resolve,reject)=>{
//   let number = 9;

//   if (number > 10){
//     resolve("perfect")
//   }else{
//     reject("error, because number is less then 10")
//   }
// })

// mypromise
// .then(function(result){
//   console.log(result)
// })
// .catch(function(error){
//   console.log(error)
// })
// function checkage(number){
//   return new Promise((resolve, reject)=>{
//     let age = number

//     if (age >= 18){
//       resolve("Allowed")
//     }else{
//         reject ("not allowed")
//     }

//   })
// }

// checkage(16)
// .then(function(result){

//   console.log(result)
// })
// .catch(function(error){
//   console.log(error)
// })


// 

// function checkNumbers(number){
// return new Promise((resolve, reject)=>{

//   if(number > 10){
//     resolve("Big Number")
//   }
//   else {
//     reject("Small Number")
//   }
  
// })
// }


// checkNumbers(15).then(function(result){
//   console.log(result)
// })
// .catch(function(error){
//   console.log(error)
// })

// checkNumbers(7)
// .then(function(result){
//   console.log(result)
// })
// .catch(function(error){
//   console.log(error)
// })


// function downloadFile(size){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(size > 100){
//         resolve("hafsa kesi ho")
//       }
//       else {
//         reject("File too Small")
//       }
//     }, 6000)
//   })
// }
// downloadFile(101)
// .then(function(result){
//   console.log(result)
// })
// .catch(function(error){
//   console.log(error)
// })

// 

// function boilWater(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       console.log("Water boiled")
//       resolve()
//     },1000)
//   })
// }

// function makeTea(){
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       console.log("Tea ready")
//       resolve()
//     },1000)
//   })
// }

// async function makeChai(){
//   await boilWater()
//   await makeTea()
//   console.log("Drink chai ☕")
// }

// makeChai()

function cookRice(){
  return new Promise(resolve =>{
    setTimeout(()=>{
      console.log("Rice Cooked")
      resolve()
    },1000)
  })

}
 function cookCurry(){
return new Promise(resolve =>{
  setTimeout(() => {
    console.log("Curry cooked")
    resolve()
  },1000);
})
 }
 async function eatFood(){
  
   await cookRice()
   await  cookCurry()
    console.log("Dinner time")
  
 }

 eatFood()

