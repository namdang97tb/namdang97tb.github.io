//bai 8 show time in titlebar
setInterval(updateTimeInTitlebar, 1000)

function updateTimeInTitlebar() {
    let showTimeInTitlebar = new Date().toLocaleTimeString()
    document.title = showTimeInTitlebar
}