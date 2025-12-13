
// // task 1  
// var fruits = ["mango", "banana", "orange" , "apple"]
// var prices = [200 , 100 , 150 , 250]
// var discountPrices = [ 180 , 90 , 135 , 225]

// var findFruitsPrices = prompt("Enter fruits name and fined prices" )

// if(findFruitsPrices === null || findFruitsPrices.trim() === ""){
//     alert ("please write fruits name")
// }
// else{
//     findFruitsPrices = findFruitsPrices.toLowerCase();

//     if(findFruitsPrices === "mango"){

        
//         alert("mango " + prices[0]+ " Rs par kg hai")
//         alert("Do you want to discount? Yes")
//         alert ("after discount , mango " + discountPrices[0] + " Rs par kg hai");
        
        
//     }
//       else if(findFruitsPrices=== "banana") {
//             alert("banana " +prices[1]+" Rs par duzzn hai")
//               alert("Do you want to discount? Yes")
//         alert ("after discount , banana " + discountPrices[1] + " Rs par duzzn hai");}
        
//        else if(findFruitsPrices === "orange" ){
//             alert("orange "+prices[2]+" Rs par kg hai")
//             alert("Do you want to discount? Yes")
//             alert ("after discount , orange " + discountPrices[2] + " Rs par kg hai");
//         }
//         else if( findFruitsPrices=== "apple"){
//             alert("apple "+prices[3]+" Rs par kg hai")
//             alert("Do you want to discount? Yes")
//             alert ("after discount , apple " + discountPrices[3] + " Rs par kg hai");
//         }
        
//         else{
//             alert("Not available")
            
//         }
//         }

// task 2........... 

var totalMarks = 500;
var obtainMarks = +prompt("Enter Your Obtain Marks")

if(obtainMarks === null && obtainMarks.trim() === ""){
    alert("please Enter your Obtain Marks")
}
else if (obtainMarks >= 80 || obtainMarks <= 100){
    alert("Grade A")
}
else if (obtainMarks >= 60 || obtainMarks <= 79){
    alert("Grade B")
}
else if (obtainMarks >= 40 || obtainMarks <= 59){
    alert("Grade C")
}
else if (obtainMarks >= 0 || obtainMarks <= 39){
    alert("fail")
}
else {
    alert("Not Available")
}

        


