
let addBtn =document.getElementById("addBtn")
let nameInput = document.getElementById("name")
let quantityInput = document.getElementById("quantity")
let priceInput = document.getElementById("price")
let totalItems =document.getElementById("totalItems")
let container =document.getElementById("container")

let count = 0


addBtn.addEventListener("click", ()=>{
let name= nameInput.value 
let quantity = quantityInput.value 
let price = priceInput.value 

if(name=== "" || quantity=== ""|| price==="") return


let itemBox = document.createElement("div")
itemBox.classList.add("itemBox")


let nameDiv = document.createElement("div")
let qtyDiv = document.createElement("div")
let priceDiv = document.createElement("div")
let deleteBtn = document.createElement("button")

nameDiv.innerText= "Name: "+ name
qtyDiv.innerText= "Quantity: " + quantity
priceDiv.innerText= "Price: " + price
deleteBtn.innerText= "Delete"

itemBox.appendChild(nameDiv)
itemBox.appendChild(qtyDiv)
itemBox.appendChild(priceDiv)
itemBox.appendChild(deleteBtn)


container.appendChild(itemBox)

count++
totalItems.innerText= "Total item" + count


deleteBtn.addEventListener("click", ()=>{
    itemBox.remove()
    count--
    totalItems.innerText = "Total Item" + count

})

nameInput.value = ""
quantityInput.value = ""
priceInput.value = ""

})


























// // })
// let addBtn = document.getElementById("addBtn")
// let nameInput = document.getElementById("name")
// let quantityInput = document.getElementById("quantity")
// let priceInput = document.getElementById("price")
// let totalItems = document.getElementById("totalItems")
// let container = document.getElementById("container")

// let count = 0;

// addBtn.addEventListener("click", () => {

//     let name = nameInput.value
//     let quantity = quantityInput.value
//     let price = priceInput.value

//     if(name === "" || quantity === "" || price === "") return

//     // Create item box
//     let itemBox = document.createElement("div")
//     itemBox.classList.add("itemBox")

//     // Create elements
//     let nameDiv = document.createElement("div")
//     let qtyDiv = document.createElement("div")
//     let priceDiv = document.createElement("div")
//     let deleteBtn = document.createElement("button")

//     // Set text
//     nameDiv.innerText = "Name: " + name
//     qtyDiv.innerText = "Qty: " + quantity
//     priceDiv.innerText = "Price: " + price
//     deleteBtn.innerText = "Delete"

//     // Append inside itemBox
//     itemBox.appendChild(nameDiv)
//     itemBox.appendChild(qtyDiv)
//     itemBox.appendChild(priceDiv)
//     itemBox.appendChild(deleteBtn)

//     // Add itemBox to container
//     container.appendChild(itemBox)

//     // Increase total items
//     count++
//     totalItems.innerText = "Total Item: " + count

//     // Delete item
//     deleteBtn.addEventListener("click", () => {
//         itemBox.remove()
//         count--
//         totalItems.innerText = "Total Item: " + count
//     })

//     // Clear inputs
//     nameInput.value = ""
//     quantityInput.value = ""
//     priceInput.value = ""
// })


