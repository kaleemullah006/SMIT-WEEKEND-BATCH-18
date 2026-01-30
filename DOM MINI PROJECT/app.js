

// let taskInput = document.getElementById("taskInput")
// let addBtn = document.getElementById("addBtn")
// let taskList = document.getElementById("taskList")

// addBtn.addEventListener("click", () => {
// let input = taskInput.value

// if(input === "" ) return

// let li = document.createElement("li");

// li.innerText = input;

// taskList.appendChild(li)

// taskInput= "";


// })
let tasks = [];

// Local storage me empty array save
localStorage.setItem("tasks", JSON.stringify(tasks));
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

 


addBtn.addEventListener("click", ()=>{
    let input = taskInput.value

    if (input === "") return


    let li = document.createElement("li")
    li.innerText= input
    taskList.appendChild(li)
    
    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    li.appendChild(deleteBtn)

         deleteBtn.addEventListener("click",()=>{
            li.remove()
         })


         li.addEventListener("click", ()=>{
            // li.style.textDecoration =  "line-through"
            li.classList.toggle("completed")
         }
        )






         taskInput.value = ""
    
})
