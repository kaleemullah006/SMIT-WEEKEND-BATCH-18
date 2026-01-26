// name input 
let nameNextBtn = document.getElementById("nameNextBtn")
let showname = document.getElementById("showName")
let nameInput = document.getElementById("name")

// team Rapper 

let teamRapper = document.getElementById("teamRapper")
let teams = teamRapper.getElementsByClassName("team")
let selectTeam = null
let teamId = null
let teamNextBtn = teamRapper.querySelector("#teamNextBtn")

// toss Rapper
let tossSides = ["hd", "tl"]
let tosses = document.getElementsByClassName("toss")
let tossNextBtn = tossRapper.querySelector("#tossNextBtn")

// choice Rapper 

let choiceRapper = document.getElementById("choiceRapper")
let batBtn = document.getElementById("batBtn")
let bowlBtn = document.getElementById("bowlBtn")
let electedNextBtn= choiceRapper.querySelector("#electedNextBtn")


nameNextBtn.addEventListener("click", function () {
    let name = nameInput.value
    if (name === "") {
        alert("Please Enter Your Name")
        return
    }
    // showname.innerText = `welcome to ${name} cricket game`
    alert(`welcome to ${name} cricket game`)
    nameInput.classList.replace("show", "hide")
    nameNextBtn.classList.replace("show", "hide")
    teamRapper.classList.replace("hide", "show")
})

for (let i = 0; i < teams.length; i++)
    teams[i].addEventListener("click", function () {

        for (let j = 0; j < teams.length; j++) {

            teams[j].classList.remove("selected")
        }
        this.classList.add("selected")
        alert("you selected " + this.innerText)
        teamId = this.id
        console.log(teamId)
        teamNextBtn.classList.replace

    })
teamNextBtn.addEventListener("click", function () {
    teamRapper.classList.replace("show", "hide")
    tossRapper.classList.replace("hide", "show")
})

// toss Rapper 

for (let i = 0; i < tossSides.length; i++)

    tosses[i].addEventListener("click", function () {
        let user = this.id

        let random = Math.round(Math.random())

        let computer = tossSides[random]

        if (user === computer) {
            alert("you won the toss")
        } else {
            alert("you are loss the Toss")
        }
    })
tossNextBtn.addEventListener("click", function () {
    tossRapper.classList.replace("show", "hide")
    choiceRapper.classList.replace("hide", "show")

})

batBtn.addEventListener("click", electedTo)
bowlBtn.addEventListener("click", electedTo)


function electedTo() {
    let user = this.id
    if (user === "batBtn") {
        alert("you are selected to bat first")
    }
    if(user === "bowlBtn"){
        alert("you are bowling first")
    }
}

electedNextBtn.addEventListener("click", function () {
choiceRapper.classList.replace("show", "hide")
    // choiceRapper.classList.replace("hide", "show")

})

// console.log(teamRapper.classList)