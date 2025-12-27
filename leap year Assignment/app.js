// Q1: Leap year check karna (basic)
// User se year input lo aur check karo leap year hai ya nahi

let year = prompt("Enter a year:");
year = Number(year);

if (year % 4 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}
