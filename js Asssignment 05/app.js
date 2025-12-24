//  Assignment 05; vowels letter count in loop 


let vowelLeter = ["a", "u", "i", "e","o"]
let word = prompt("enter t word").toLowerCase();
let count = []

for (let i = 0 ; i<word.length ; i++){
    if(vowelLeter.includes(word[i])){
        count.push(word[i])
    }
}

console.log(word +";" +"the vowels"+ count)
console.log("the leters"+word.length)