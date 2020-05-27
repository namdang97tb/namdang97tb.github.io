//bai15 lam chiec may cam tay
let showNumber = document.getElementById("result")

function number1() {
    showNumber.value += 1
}

function number2() {
    showNumber.value += 2
}

function number3() {
    showNumber.value += 3
}

function number4() {
    showNumber.value += 4
}

function number5() {
    showNumber.value += 5
}

function number6() {
    showNumber.value += 6
}

function number7() {
    showNumber.value += 7
}

function number8() {
    showNumber.value += 8
}

function number9() {
    showNumber.value += 9
}

function number0() {
    showNumber.value += 0
}

function AC() {
    showNumber.value = ""
}

function plus() {
    showNumber.value += '+'
}

function tru() {
    showNumber.value += '-'
}

function nhan() {
    showNumber.value += '*'
}

function chia() {
    showNumber.value += '/'
}

function cham() {
    showNumber.value += '.'
}

function res() {
    showNumber.value = eval(showNumber.value)
}

function dell() {
    let str = showNumber.value
    str = str.substring(0, str.length - 1);
    showNumber.value = str;
}