var btn = document.querySelector("button")
var body = document.querySelector("body")
var hex = ['A', 'B', 'C', 'D', 'E', 'F']
var color = document.querySelector("p")
let colorName = '#'
btn.addEventListener("click", function () {
    for (let i = 0; i < hex.length; i++) {
        let index = Math.floor(Math.random() * hex.length)
        colorName += hex[index]
    }
    body.style.background = colorName
    color.innerHTML = colorName
    colorName = "#"
})