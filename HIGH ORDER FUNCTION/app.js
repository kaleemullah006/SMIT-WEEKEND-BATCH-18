// function operation(a, b, callback){
//     let result = callback(a, b)
//     console.log(result)
// }

// operation(3, 4, function(x, y){
//     return x + y
// })

// function process(callback){
//     let result = callback(5)
//     console.log(result)
// }

// process(function(a){
//     return 10 
// })

// function calculate(a, b, callback) {
//     let result = callback(a, b)
//     console.log(result)
// }

// calculate(3, 4, function (x, y) {
//     return x + y
// })
// function calculate(a, b, callback) {
//     let result = callback(a, b)
//     console.log(result)
// }

// calculate(3, 4, function (x, y) {
//     return x * y
// })


function step1(num, callback){
    let result = num + 5
    callback(result)
}

function step2(num, callback){
    let result = num * 2
    callback(result)
}

function step3(num, callback){
    let result = num - 3
    console.log(result)
}

step1(5, function(result1){
    step2(result1, function(result2){
        step3(result2)
    })
})

