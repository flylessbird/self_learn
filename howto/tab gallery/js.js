function myFunction(img) {
    var expand = document.getElementById("expandedImg")
    expand.src = img.src
    var text = document.getElementById("imgtext")
    text.innerHTML = img.alt
    expand.parentElement.style.display = "block"
}