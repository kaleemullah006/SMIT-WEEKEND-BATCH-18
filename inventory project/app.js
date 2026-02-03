let profit = document.getElementById("profit")
let boxWrapper = document.getElementById("box-wrapper")

let itemForm = document.getElementById("item-form")
let itemTitleElement = document.getElementById("title")
let itemquantityElement = document.getElementById("quantity")
let itemPriceElement = document.getElementById("price")
let addBtn = document.getElementById("add-btn")

let totalProfit = 0;

addBtn.addEventListener("click", () => {
    let itemTitle = itemTitleElement.value
    let itemQuantity = Number(itemquantityElement.value)
    let itemPrice = itemPriceElement.value


    for (let i = 0; i < itemQuantity; i++) {
        let box = document.createElement("div")
        box.setAttribute("class","box")
        let soldBtn = document.createElement("button")
        soldBtn.innerText = "Sold"
        // boxWrapper.appendChild(soldBtn)
        box.innerText =itemTitle + " ---" + itemPrice
        box.appendChild(soldBtn)

        boxWrapper.appendChild(box)
    }

    soldBtn.addEventListener("click", ()=>{

        
    })



})
