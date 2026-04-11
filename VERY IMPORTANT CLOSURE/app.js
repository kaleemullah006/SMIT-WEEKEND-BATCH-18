// function createPassword(initialP){
//     let password = initialP

//   return {
//    checkPassword : function  (input){

//        return  input === password
//     },
//     changePassword: function (newPass){
// return password = newPass
//     }
//   }
// }

// let user = createPassword("1234")

// console.log(user.checkPassword("1234")) 
// console.log(user.checkPassword("0000")) 
// console.log(user.changePassword("abcd")) // not a best way to change the password
// user.changePassword("abcd") // best way to change the password
// console.log(user.checkPassword("abcd"))

// function createUser(user){
//   let name = user

//   return{
//     getName: function(){
//       return name
//     },
//     setName: function(newName){
//            return name = newName
//     }
//   }
// }

// let person = createUser("ali")

// console.log((person.getName()))
// person.setName("habib")
// console.log(person.getName())


// function createBank(balance) {
//   let ropees = balance

//   return {
//     checkropees: function () {
//       return ropees
//     },
//     depositropees: function(amount){
//       return ropees += amount
//     },
//      withdraw: function(amount){
//       return ropees -= amount
//      }
//   }
// }

// let newropees = createBank(10000)

// console.log(newropees.checkropees())
// newropees.withdraw(5000)
// console.log(newropees.checkropees())
// newropees.depositropees(11000)
// console.log(newropees.checkropees())

// function createCounter(){
//   let count = 0

//   return {
//     inc: function(){
//       return ++count
//     },
//     dec: function(){
//       return --count 
//     },

//     reset: function(){
//        count = 0
//       return count
//     }

//   }
// }

// let result = createCounter(0)

// console.log(result.inc())
// console.log(result.inc())
// console.log(result.inc())
// console.log(result.inc())
// console.log(result.dec())
// console.log(result.dec())
// console.log(result.dec())


//  function createCart(){
//   let bill = 0
//   return {

//     addItems: function(price){
//       return bill += price
//     },
//     removeItems : function(price){
//       return bill -= price
//     },
//     total: function (){
//       return bill + price
//     }
//   }
//  }

//  let result = createCart(0)
//  console.log(result.addItems(100))
//  console.log(result.removeItems(20))


function createLogin(email,password){
  email, password

 return{
  login: function(e,p){
    if (e === email && p === password){
      return ("login succesfully")
    }
    else{
      return ("try again")
    }

  }, 
   changePassword: function(newPass){
          return password = newPass
   },
   getEmail: function(){
    return email
   }

 }
}

let empass = createLogin("khan@gmail.com", "pakistan123@")

console.log(empass.login("khan@gmail.com", "pakistan123@"))

empass.changePassword("123456")
console.log(empass.login("khan@gmail.com", "123456"))

console.log(empass.getEmail())

