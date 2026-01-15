let btn = document.getElementById("btn")
let light = document.querySelector(".lightOff")


    btn.addEventListener("click", function () {

    const isOff = light.classList.contains("lightOff");

    if (isOff) {
        light.classList.replace("lightOff", "lightOn");
        btn.innerText="Light Off kardo"
    } else {
        light.classList.replace("lightOn", "lightOff");
        btn.innerText = "Light On kardo "
    }

});
