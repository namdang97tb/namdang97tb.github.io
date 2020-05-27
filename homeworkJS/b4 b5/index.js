//bai 4 //bai 5 nhap tuoi
let now = new Date().getFullYear()
do {
    var inputAge = prompt("When were you born?", "");
} while (now < inputAge)
let age = now - inputAge
document.write("<p class='bold'>Age: " + age + "</p>")