var prev = document.getElementById('prev')
var next = document.getElementById('next')
var rand = document.getElementById('rand')
var img = document.getElementById("img")
var arr = ["/howto/slider/img/cat.jpg", "/howto/slider/img/garden.jpg", "/howto/slider/img/potato.jpg", "/howto/slider/img/tomato.jpg"]
var len = arr.length
var i = 0
next.addEventListener("click", function () {
    i++
    if (i >= len) {
        i = 0;
    }
    img.src = arr[i]

})
prev.addEventListener("click", function () {
    i--
    if (i <= -1) {
        i = len - 1;
    }
    img.src = arr[i]

})
rand.addEventListener("click", function () {
    // [0-3]
    var num = Math.floor(Math.random() * len)
    img.src = arr[num]
})