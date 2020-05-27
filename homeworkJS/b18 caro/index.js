//withd, hieght map
var w = 450
var h = 450
var c = document.getElementById("caro")
var ctx = c.getContext("2d")
    //new game
function newGame() {
    ctx.clearRect(0, 0, w, h);
    map = [
        [21, 22, 23],
        [24, 25, 26],
        [27, 278, 28],
    ]
    player = 0
    count = 0
    drawMap()
}
newGame()

// ve map
function drawMap() {
    ctx.fillStyle = "#0007"
    ctx.fillRect(0, 0, 450, 450);
    ctx.moveTo(w / 3, 0);
    ctx.lineTo(w / 3, h);
    ctx.moveTo(2 * w / 3, 0);
    ctx.lineTo(w * 2 / 3, h);
    ctx.moveTo(0, h / 3);
    ctx.lineTo(w, h / 3);
    ctx.moveTo(0, h * 2 / 3);
    ctx.lineTo(w, h * 2 / 3);
    ctx.stroke()
}
// ve X,O
function drawXO() {
    let player1 = 0;
    let player2 = 1;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            let spot = map[i][j];
            switch (spot) {
                case player1:
                    let x = w / 3 * (j + 1) - w / 6
                    let y = h / 3 * (i + 1) - h / 6
                    ctx.beginPath();
                    ctx.arc(x, y, 50, 0, 2 * Math.PI);
                    ctx.stroke();
                    break;
                case player2:
                    let x11 = w / 3 * j
                    let y11 = h / 3 * i
                    let x12 = w / 3 * (j + 1)
                    let y12 = h / 3 * (i + 1)
                    ctx.moveTo(x11 + w / 16, y11 + h / 16);
                    ctx.lineTo(x12 - w / 16, y12 - h / 16);
                    let x21 = w / 3 * (j + 1) - w / 16
                    let y21 = h / 3 * i + h / 16
                    let x22 = w / 3 * j + w / 16
                    let y22 = h / 3 * (i + 1) - h / 16
                    ctx.moveTo(x21, y21);
                    ctx.lineTo(x22, y22);
                    ctx.stroke()
                    break;
            }
        }
    }
}

//check winner
function equals3(a, b, c) {
    if (a == b) {
        if (b == c)
            return true
    }
}

function checkWin2() {
    winner = null
    for (let i = 0; i < 3; i++)
        if (equals3(map[i][0], map[i][1], map[i][2])) {
            winner = map[i][0]
        }
    for (let i = 0; i < 3; i++)
        if (equals3(map[0][i], map[1][i], map[2][i])) {
            winner = map[0][i]
        }
    if (equals3(map[0][0], map[1][1], map[2][2])) {
        winner = map[0][0]
    }

    if (equals3(map[2][0], map[1][1], map[0][2])) {
        winner = map[2][0]
    }
    if (winner == null)
        if (count == 9)
            winner = -1
    return winner
}

//notiWin
function notiWin() {
    let showTurn = document.getElementById("turn")
    switch (winner) {
        case 0:
            showTurn.innerHTML = "Winner: Player O";
            break;
        case 1:
            showTurn.innerHTML = "Winner: Player X"
            break;
        case -1:
            showTurn.innerHTML = "Tie =)))"
    }
}

// click X,O
function clickDown(event) {
    count = count + 1
    let cLeft = c.offsetLeft
    let cTop = c.offsetTop
    let x = event.pageX - cLeft
    let y = event.pageY - cTop
    if (x < w / 3) {
        if (y < h / 3)
            map[0][0] = player
        else {
            if (y < h * 2 / 3) {
                map[1][0] = player
            } else {
                if (y > h * 2 / 3)
                    map[2][0] = player
            }
        }
    } else {
        if (x < w * 2 / 3) {
            if (y < h / 3)
                map[0][1] = player
            else {
                if (y < h * 2 / 3) {
                    map[1][1] = player
                } else {
                    if (y > h * 2 / 3)
                        map[2][1] = player
                }
            }
        } else {
            if (x > w * 2 / 3) {
                if (y < h / 3)
                    map[0][2] = player
                else {
                    if (y < h * 2 / 3) {
                        map[1][2] = player
                    } else {
                        if (y > h * 2 / 3)
                            map[2][2] = player
                    }
                }
            }
        }
    }
    drawXO()
    let showTurn = document.getElementById("turn")
    if (player == 0) {
        player = 1
        showTurn.innerHTML = "Next turn: Player X"
    } else {
        player = 0
        showTurn.innerHTML = "Next turn: Player O"
    }
    checkWin2()
    notiWin()
}
c.addEventListener("click", clickDown)