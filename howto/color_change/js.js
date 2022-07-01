var btn = document.querySelector("button")
var body = document.querySelector("body")
var color = ["red", "green", "blue", "yellow", "purple", "pink"]
btn.addEventListener("click", function () {
    var index = Math.floor(Math.random() * color.length)
    body.style.background = color[index]
})