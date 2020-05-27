let slides = document.getElementsByClassName("mySlide")
let j = 0
for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = "none"
    console.log(slides);
}

function nextBtn() {
    if (j < slides.length - 1) {
        slides[j].style.display = "none"
        j++
        slides[j].style.display = "block"
    } else {
        slides[j].style.display = "none"
        slides[0].style.display = "block"
        j = 0
    }
}

function preBtn() {
    if (j > 0) {
        slides[j].style.display = "none"
        j--
        slides[j].style.display = "block"
    } else {
        slides[j].style.display = "none"
        slides[slides.length - 1].style.display = "block"
        j = slides.length - 1
    }
}
setInterval(auto = () => {
    if (j < slides.length - 1) {
        slides[j].style.display = "none"
        j++
        slides[j].style.display = "block"
    } else {
        slides[j].style.display = "none"
        slides[0].style.display = "block"
        j = 0
    }
}, 5000)