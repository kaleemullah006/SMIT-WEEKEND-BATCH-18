// let user = {
//     name: "Haniya"
// }

// function sayName(){
//     console.log("My name is " + this.name)
// }

// sayName.call(user)

// function greet(city){
//     console.log(this.name + " from " + city)
// }

// let p = { name: "Ali" }

// greet.call(p, "Karachi")

// let student = {
//     name: "Kalimullah"
// }

// function intro(city, age){
//     console.log(this.name + " " + city + " " + age)
// }


// intro.call(student,"karachi", 24)

// let user = {
//     name: "Ali"
// }

// function show(country, age){
//     console.log(this.name + " " + country + " " + age)
// }

// show.apply(user, ["pakistan", 28])

// let student = {
//     name: "Haniya"
// }

// function intro(city){
//     console.log(this.name + " From " + city)
// }


// let newStudent = intro.bind(student, "karachi")
// newStudent()

// let obj = {
//     name: "Ali"
// }

// function greet(city, country){
//     console.log(this.name + " from " + city + " " + country)
// }

// // bind use karo:
// // 1. function store karo
// // 2. sirf city bind karo
// // 3. baad me country pass karo

// let newObj = greet.bind(obj," karachi " )

// let country = "pakistan"

// newObj(country)

// let data = new Map()

// data.set("name", "hania")
// data.set("city", "karachi")
// console.log(data.get("name"))
// console.log(data.get("city"))
// data.delete("name")
// console.log(data.get("name"))

// let nums = new Set()

// nums.add(1)
// nums.add(2)
// nums.add(2)
// nums.add(3)
// nums.add(4)
// nums.add(4)

// console.log(nums)

// let arr = [1,2,2,3,4,4,5]

// let unique = [...new Set(arr)]

// console.log(unique)

// let arr1 = [10,20]
// let arr2 = [40,30]

// let arr3 = [...arr1, ...arr2]

// console.log(arr3)

let map = new Map()

map.set("name", "Haniya")
map.set(1,"number")
map.set(true,"yes")
 
for(let [i,h] of map){

    console.log(i,h)
}










