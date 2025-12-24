
// // // let vowels = ['a', 'e', 'i', 'o', 'u'];


// // // let find = prompt("enter a word").toLowerCase();

// // // let count = []

// // // for (let i = 0; i < find.length; i++) {
// // //    if(vowels.includes(find[i])){
// // //     count.push(find[i])

// // //    }

// // // }
// // // console.log("vowels leter "+ count.length, count)


// // // let vowelsLeter= ["a","i","u","e","o"]
// // // let checkVowels = prompt("Enter the word ").toLowerCase();
// // // let emptyArray = []

// // // for (let i = 0; i < checkVowels.length; i++) {
// // //     if (vowelsLeter.includes(checkVowels[i])) {

// // //         emptyArray.push(checkVowels[i])
// // //     }

// // // }
// // // console.log(checkVowels+ ": vowels leter " + emptyArray.length, emptyArray)

// // let vowelLeter = ["a", "u", "i", "e","o"]

// // let userWord = prompt("nter your word").toLowerCase();
// // let count = []

// // for (let i = 0; i < userWord.length; i++) {
// //     if(vowelLeter.includes(userWord[i])){
// //     count.push(userWord[i])

// // }
// // } 

// //     console.log(userWord +";" +"the vowels"+ count)
// //     console.log("the leters"+userWord.length)



//  let vowelLeter = ["a", "u", "i", "e","o"]

// let userWord = prompt("enter your word").toLowerCase();
// let count = []

// for (let i = 0; i < userWord.length; i++) {
//     if(vowelLeter.includes(userWord[i])){
//         count++
//     }}
//     console.log(count)


//  let vowelLeter = ["a", "u", "i", "e","o"]

// let userWord = prompt("enter your word").toLowerCase();
// let count = []

// for (let i = 0; i < userWord.length; i++) {
//    if (userWord !== vowelLeter){
// console.log("try again")
//    }


//    if (vowelLeter.includes(userWord[i])){
//     }

//         console.log(count)
//     }


let vowelsLeter = ["a", "e", "i", "o", "u"]
let userword = prompt("Enter your Word");

if (!isNaN(userword)) {
    console.log("please enter alphate, Not a Number")
} else {
    userword = userword.toLowerCase();
    let count = [];

    for (let i = 0; i < userword.length; i++) {
        if (vowelsLeter.includes(userword[i])) {
            count.push(userword[i])
        }
    }
    if (count.length === 0) {
        console.log("No vowels Found")
    } else {

        console.log("vowels found", count)
        console.log("totals vowels ", count.length)
    }

}
