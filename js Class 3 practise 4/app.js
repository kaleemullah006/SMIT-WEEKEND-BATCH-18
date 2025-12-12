// practice set 4 

// let cities = ["Islamabad", "karachi", "lahore" ]

// var userCity = prompt("Enter Your City")

// if(!userCity === 0 || userCity.trim() === ""){
//     alert("please enter your city")
// }
// else{
//     userCity = userCity.toLowerCase();
//     if (cities.includes(userCity)){

//         alert("city found")
//     }
//     else{
//         alert("city not found")
//     }

// }

// task 2 

let fruits = ["mango" ,"banana" , "orange" , "apple"];
let prices = [200 , 100 , 150 , 250];

let searchFruits = prompt("Enter Your Fruits and know about its rates")

if(searchFruits === null || searchFruits.trim()=== ""){
    alert("please enter fruits name")
} 
else {
    searchFruits = searchFruits.toLowerCase();

    if(searchFruits === "mango"){

        alert("mango " +prices[0]+" Rs par kg hai")
    }

    
  else  if(searchFruits === "banana"){

        alert("banana " +prices[1]+" par duzzon hai")
    }



else if(searchFruits === "orange"){

    alert("orange " + prices[2]+ " par kg hai")
}

else if(searchFruits === "apple"){

    alert("apple " +prices[3]+"rs par kg hai")
}


else {
    alert("Not available")
}
}