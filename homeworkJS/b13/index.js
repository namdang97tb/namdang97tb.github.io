//bai 13 dong ho bam gio
let msTime = 0
let sTime = 0
let mTime = 0
let check1 = 1
let chekc2 = 0

function updateTime() {
    msTime = msTime + 1
    if (msTime > 9) {
        msTime = 0
        sTime = sTime + 1
    }
    if (sTime > 59) {
        sTime = 0
        mTime = mTime + 1
    }
    let showtime = document.getElementById("updateTime")
        // console.log(mTime + "m" + sTime)
    showtime.innerHTML = "Time: " + mTime + "m" + sTime + "s" + msTime + "'"
}

function clickStart() {
    if (check1 == 1) {
        loop = setInterval(updateTime, 100)
        check1 = 0
        check2 = 0
    }
}

function clickStop() {
    clearInterval(loop)
    check1 = 1
    check2 = 1
}

function clickRs() {
    if (check2 == 1) {
        time = 0
        showtime = document.getElementById("updateTime")
        console.log(time)
        showtime.innerHTML = "Time: " + time
        check2 = 0
    }
}