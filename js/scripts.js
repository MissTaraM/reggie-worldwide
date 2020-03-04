const button = document.querySelector("button")
const body = document.querySelector("body")

const colors = ["green", "pink", "yellow", "purple"]
//                 0       1       2        3
//  colors [1]


body.style.backgroundColor = "cyan"

button.addEventListener("click", changeBackground)


function changeBackground() {
    const colorIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}



