var block = document.querySelectorAll(".block")
var p = document.querySelectorAll(".content")
var plus = document.querySelectorAll(".plus")
var minus = document.querySelectorAll(".minus")
for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', function () {
        if (p[i].classList.contains('hide')) {
            p[i].classList.remove('hide')
            plus[i].classList.add('hide')
            minus[i].classList.remove('hide')
        } else {
            p[i].classList.add('hide')
            plus[i].classList.remove('hide')
            minus[i].classList.add('hide')

        }
    })
}