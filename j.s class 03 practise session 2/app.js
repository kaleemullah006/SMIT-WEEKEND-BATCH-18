
// var gradeA = 80-100;
// var gradeB = 60-79;
// var gradeC = 40-59;
// var fail   =  0-39;

// const marks = prompt("Enter Your Marks")
// if(marks === null){
//     alert("You Cancelled the Input")
// }
// else if(marks.trim() === ""){
//     alert("you kept the Input Empty")
// }

// else if (marks >= 80 && marks <= 100) {

//     alert("Grade A")

// }
// else if (marks >= 60 && marks <= 79) {


//     alert("Grade B")
// }


// else if (marks >= 40 && marks <= 59) {


//     alert("Grade C")
// }

// else if (marks >= 0 && marks < 40) {

//     alert("Fail")
// }
// else {
//     alert("Invalid Marks")
// }

let marks = prompt ("Enter Your Marks")

if(marks === null){
    alert("You Cancelled the Input!")
}
else if (marks.trim() === ""){
    alert("You kept the Input Empty")
}
else {
    marks = +(marks)
    
    if(isNaN(marks)){
        alert("Invalid Input! Please enter numbers only.")
    }
    else  if (marks >= 80 && marks <= 100) {

    alert("Grade A")

}
else if (marks >= 60 && marks <= 79) {


    alert("Grade B")
}


else if (marks >= 40 && marks <= 59) {


    alert("Grade C")
}

else if (marks >= 0 && marks < 40) {

    alert("Fail")
}
else {
    alert("Invalid Marks")
}

}