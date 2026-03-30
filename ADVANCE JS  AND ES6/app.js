// let square = (num)=> {
//     return num * num
// }
// console.log(square (4,4))
// console.log(square (5,5))

// let square = (num)=> num * num

// console.log(square (4))
// console.log(square (5))

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ali", sayBye);

// function processUser(name, callback){
//     console.log("User:"+ name);
//     callback()
// }
// function setuation(){
//     console.log("Data Processed")
// }

// processUser("ali", setuation)

// 1️⃣ Get ingredients
// function getIngredients(callback) {
//     console.log("Getting ingredients...");
//     setTimeout(() => {
//         const ingredients = ["tomato", "onion", "pepper"];
//         callback(null, ingredients);
//     }, 1000);
// }

// // 2️⃣ Chop ingredients
// function chopIngredients(ingredients, callback) {
//     console.log("Chopping ingredients:", ingredients);
//     setTimeout(() => {
//         const chopped = ingredients.map(i => i + " chopped");
//         callback(null, chopped);
//     }, 1000);
// }

// // 3️⃣ Cook
// function cook(chopped, callback) {
//     console.log("Cooking:", chopped);
//     setTimeout(() => {
//         const cookedMeal = chopped.join(" + ") + " cooked";
//         callback(null, cookedMeal);
//     }, 1000);
// }

// // 4️⃣ Plate
// function plate(cookedMeal, callback) {
//     console.log("Plating:", cookedMeal);
//     setTimeout(() => {
//         const platedDish = cookedMeal + " on plate";
//         callback(null, platedDish);
//     }, 1000);
// }

// // 5️⃣ Serve
// function serve(platedDish, callback) {
//     console.log("Serving:", platedDish);
//     setTimeout(() => {
//         callback(null, "Meal served successfully!");
//     }, 1000);
// }

// getIngredients(function(err, ingredients) {
//     if(err) return console.error(err);

//     chopIngredients(ingredients, function(err, chopped) {
//         if(err) return console.error(err);

//         cook(chopped, function(err, cookedMeal) {
//             if(err) return console.error(err);

//             plate(cookedMeal, function(err, platedDish) {
//                 if(err) return console.error(err);

//                 serve(platedDish, function(err, result) {
//                     if(err) return console.error(err);

//                     console.log("Done:", result);
//                 });
//             });
//         });
//     });
// });

// function greet (callback){
//     console.log("hi!")
//     callback()
// }
//   function goodBye(){
//     console.log("goodbye!")
//   }
//   greet(goodBye)

// function greet (callback){
//     console.log("hello")
//     callback()
// }
// function askHow(callback){
//     console.log("how are you")
//     callback()
// }
//   function goodBye(){
//     console.log("bye!")
//   }
//   greet (function(){
//     askHow(goodBye)
//   })

// function getItems(callback){
//     console.log("Get Items")
//     callback()
// }

// function prepareItems(callback){
// console.log("prepare Items")
// callback()
// }
//  function useItems(){
//     console.log("use Items")

//  }

// getItems(function(){
//     prepareItems(function(){
//         useItems();


//     });
// });
// function wakeUp(callback){
//     console.log("wake Up")
//     callback()
// }

// function brushTeeth(callback){
// console.log("brush teeth")
// callback()
// }
//  function eatBreakfast(){
//     console.log("eat Breakfast")

//  }

// wakeUp(function(){
//     brushTeeth(function(){
//         eatBreakfast();


//     });
// });

// function wakeUp(callback){
//     console.log("Wake up!");
//     callback();
// }

// function brushTeeth(callback){
//     console.log("Brush teeth!");
//     callback();
// }

// function eatBreakfast(callback){
//     console.log("Eat breakfast!");
//     callback();
// }

// function getReady(){
//     console.log("Get ready!");
// }

// // Call the functions in sequence
// wakeUp(function(){
//     brushTeeth(function(){
//         eatBreakfast(function(){
//             getReady()
//         })
//     })
// });

// function placeOrder(callback) {
//     console.log("Order Placed")
//     callback()
// }

// function processOrder(callback) {
//     console.log("Order processing")
//     callback()
// }

// function packOrder(callback) {
//     console.log("Order Packed")
//     callback()
// }

// function shipOrder(callback) {
//     console.log("Order shipped")
//     callback()
// }

// function deliverOrder() {
//     console.log("Order Delivered")
// }

// placeOrder(function () {
//     processOrder(function () {
//         packOrder(function () {
//             shipOrder(function () {
//                 deliverOrder();
//             })
//         })
//     })
// })

// function chopIngredients(ingredients, callback){
//     // yahan logic likho

// }

// chopIngredients(["tomato","onion"], function(err, chopped){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(chopped);
// });
// function getIngredients(callback){
//     callback(null, ["tomato", "onion"]);
// }
// getIngredients(function(err, ingredients){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(ingredients);
// });

// function getData(callback){
//     callback(null, ["tomato", "onion"])
// }

// getData(function(err, data){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });

// function getIngredients(callback){
//     console.log("Getting ingredients...");
//     callback(null, ["tomato", "onion"]);
// }

// function chopIngredients(ingredients, callback){
//     console.log("Chopping:", ingredients);
//     callback(null, ["chopped tomato", "chopped onion"]);
// }
// function cook(chopped, callback) {
//     console.log("cooking")
//     callback(null,chopped)
// }

// function meal() {
//     console.log("cooked meal")
// }

// // Call chain
// getIngredients(function(err, ingredients){
//     if(err){
//         console.log(err);
//         return;
//     }

//     chopIngredients(ingredients, function(err, chopped){
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log("Result:", chopped);
//     });
// });

// function getUser(callback){
//     callback("null", "Ali")
// }

// getUser(function(err, user){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(user);
// });

// function getName(callback){
//     let error = true;

//     if(error){
//         callback("name not found", null)
//     }
//     else{
//         callback(null, "ahmad")
//     }
// }

// getName(function(err, name){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(name);
// });

// function getAge(callback) {
//     let error = true
//        if(error){
//         callback("age not found" , null)
//     }
//     else{
//         callback(null,25)
//     }

// }

// getAge(function(err,age){
//     if(err){
//         console.log(err)
//         return

//     }
//     console.log(age)

// })

// function getIngredients(callback){
//     callback(null, ["tomato", "onion"]);
// }

// function chopIngredients(ingredients, callback){
//     callback(null, ["chopped tomato", "chopped onion"]);
// }
//  function cook(chopped, callback){
//     callback(null, "cooked meal")
//  }

// // Chain
// getIngredients(function(err, ingredients){
//     if(err){
//         console.log(err);
//         return;
//     }

//     chopIngredients(ingredients, function(err, chopped){
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log("Chopped Ingredients:", chopped);
//     });
// });

// cook()

// function getIngredients(callback){
//     console.log("getting ingredient")

//     setTimeout(() => {
//         var ingredient = ["tomato", "potato", "onion"]
//         callback(null,ingredient)
//     }, 1000);
// }

// getIngredients(function(error,ingredient){
//     if(error){
//         console.log("ingredient not found")
//     }

//     else{
// console.log("Ingredients:",ingredient)
//     }
// })

// function washFace(callback) {
//     console.log("munh dhoya")
//     callback(null,"munh dhoya")
// }

// washFace(function(err,data){
//     console.log(data)
// })

// function wearUniform(callback) {
//     // console.log("wear uniform")
//     callback(null, "wear uniform")
// }
// function wearShoes(data,callback) {
//     callback(null,data+"wear shoes")
// }
//  wearUniform(function(err,data){
//     if(err) return console.error(err)
//     console.log(data)

// wearShoes(data,function(err,result){
//    if (err) return console.error(err)
//    console.log(result)
// })
//  })


// function wakeUp(callback){
//     console.log("Uth gaya");
//     callback(null, "Uth gaya");
// }

// function brushTeeth(data, callback){
//     console.log("Brush kiya");
//     callback(null, data + " → Brush kiya");
// }

// function eatBreakfast(data, callback){
//     console.log("Nashta kiya");
//     callback(null, data + " → Nashta kiya");
// }

// // Call (Chain)
// wakeUp(function(err, data){

//     brushTeeth(data, function(err, data2){

//         eatBreakfast(data2, function(err, finalData){

//             console.log(finalData);

//         });

//     });

// });

// function chopVegitables(callback) {
//     console.log("chpping Vegitables")
//     callback(null,["tomato","potato","onion"] )
// }

// chopVegitables(function(error,ingredient){
//     console.log(ingredient)
// })


// function turnOnGas(callback) {
//     console.log("gas ko on kar dia")
//     callback()
// }
// function putPan(callback) {
//     setTimeout(function () {
//         console.log("pani main obal agya")
//         callback()
//     }, 3000);

// }

// function cookEgg(callback) {
//     setTimeout(function () {

//         console.log("anda pak gaya")
//         callback()
//     }, 3000);
// }

// turnOnGas(function () {
//     putPan(function () {
//         cookEgg(function () {
//             console.log("Done")
//         })


//     });
// });

// function openBook(callback) {
//     console.log("book khol lia")
//     callback()
// }

// function readBook(callback) {
//     setTimeout(function () {
//         console.log("Book parh Lia")

//         callback()
//     }, 2000)
// }

// function closeBook(callback) {
//     setTimeout(function(){
// console.log("Book band kar dia")
// callback()
//     },2000)
// }

// openBook(function(){

//     readBook(function(){

//         closeBook(function(){
//             console.log("done")
//         })

//     })
// })
