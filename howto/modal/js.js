var img = document.getElementById("image")
var block = document.getElementById("block")
var sign = document.getElementById("sign")
var body = document.querySelector("body")
img.addEventListener('click', function () {

    block.removeAttribute('id');
    block.classList.add("block")
    body.classList.add("bg")
    sign.style.display = "block"
})
sign.addEventListener("click", function () {
    body.classList.remove("bg")
    sign.style.display = "none"
    block.setAttribute('id', 'block');
})