


// var fullName = "kaleem ullah";
//  var firstChar = fullName.slice(0,1).toUpperCase();
//  var eightChar = fullName.slice(0,8).toUpperCase();
//  var result = fullName+firstChar.slice(1);
//  var result = fullName+eightChar.slice(8);


//  console.log(result)

// var fullName = "kaleem ullah";
// var choice = prompt("1 ya 8 likhen");

// var index = choice - 1;

// var result =
//   fullName.slice(0, index) +
//   fullName.slice(index, index + 1).toUpperCase() +
//   fullName.slice(index + 1);

// console.log(result);

let typesOfChai = [
  "green tea",
  "black tea", "ginger tea",
  "cardamom tea",
  "lemon tea",
  "masala tea",
 "gurh chai"];

 for (let i =0 ; i <typesOfChai.length; i++){
    const chai = typesOfChai[i]
    console.log(chai)
    if(chai === "lemon tea"){
        alert("ustad 1 lemon tea le ao")
        break;
        continue;
    }
    alert("ustaad lemon tea hai kia ?")
 }

