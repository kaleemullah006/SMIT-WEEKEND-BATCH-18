

// let vowelLetter = ['a', 'e', 'i', 'o', 'u'];
// let userValue = prompt("Enter something").toLowerCase();
// let isTrue = false;

// for (let i = 0; i < vowelLetter.length; i++) {
//     if (userValue === vowelLetter[i]) {
//         isTrue = true;
//         break;

       
//     }


// }
// if(isTrue){
//     console.log("ye vowel hai ")
// }else{
//     console.log("ye vowel nahi hai")
    
// }

let vowels = ['a', 'e', 'i', 'o', 'u'];
let value = prompt("enter the value").toLowerCase();
let count= [];

for (let i = 0; i < value.length; i++) {
    if(vowels.includes(value[i])){
count.push(value[i]);
        
    }
    
    
}
console.log(value +" : " + " vowel words "+ count.length)
console.log("vowel words :"+ count )