// let his = document.getElementById("history")

function keyDown(event) {
    switch (event.keyCode) {
        case 65:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/040.wav"
                song.play()
                // his.value = " a"
                let key = document.getElementById("key-A")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 87:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/041.wav"
                song.play()
                // his.value = "w"
                let key = document.getElementById("key-W")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)

            }
            break;
        case 83:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/042.wav"
                song.play()
                let key = document.getElementById("key-S")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 69:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/043.wav"
                song.play()
                let key = document.getElementById("key-E")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)

            }
            break;
        case 68:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/044.wav"
                song.play()
                let key = document.getElementById("key-D")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 70:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/045.wav"
                song.play()
                let key = document.getElementById("key-F")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 84:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/046.wav"
                song.play()
                let key = document.getElementById("key-T")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 71:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/047.wav"
                song.play()
                let key = document.getElementById("key-G")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 89:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/048.wav"
                song.play()
                let key = document.getElementById("key-Y")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 72:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/049.wav"
                song.play()
                let key = document.getElementById("key-H")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 85:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/050.wav"
                song.play()
                let key = document.getElementById("key-U")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 74:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/051.wav"
                song.play()
                let key = document.getElementById("key-J")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 75:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/052.wav"
                song.play()
                let key = document.getElementById("key-K")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 79:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/053.wav"
                song.play()
                let key = document.getElementById("key-O")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 76:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/054.wav"
                song.play()
                let key = document.getElementById("key-L")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 80:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/055.wav"
                song.play()
                let key = document.getElementById("key-P")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
        case 186:
            {
                let song = new Audio();
                song.type = "audio/wav"
                song.src = "./audio/056.wav"
                song.play()
                let key = document.getElementById("key-;")
                key.classList.add("playing")
                setTimeout(rm = () => {
                    key.classList.remove("playing")
                }, 150)
            }
            break;
    }

}
window.addEventListener("keydown", keyDown)