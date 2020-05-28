var c = document.getElementById("snake")
var ctx = c.getContext("2d")
let width = 600
let height = 400
let step = 20
let box = 20
var imgApple = new Image;
imgApple.src = "./images/apple.jpg"

let snake = [];
snake[0] = {
    x: 0 * box,
    y: 0 * box
};

let apple = {
    x: getRndInteger(0, 29) * box,
    y: getRndInteger(0, 19) * box
}

let key;

let scores = 0;
let showScores = document.getElementById("scores")

//map
function map(ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i <= 30; i++) {
        for (let j = 0; j <= 20; j++) {
            if ((i % 2 == 0) && (j % 2 == 0)) {
                ctx.fillStyle = "#D3D3D3"
                ctx.fillRect(i * box, j * box, box, box)
            }
            if ((i % 2 != 0) && (j % 2 != 0)) {
                ctx.fillStyle = "#D3D3D3"
                ctx.fillRect(i * box, j * box, box, box)
            }
        }
    }
}

function draw() {
    //map
    map(ctx)

    //apple
    ctx.drawImage(imgApple, apple.x, apple.y, box, box);
    //
    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "black";
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }
    //end game
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            endGame();
            console.log("sss")
        }
    }

    //xuyen wall
    if (snake[0].x == width) {
        snake[0].x = 0
    }
    if (snake[0].x < 0) {
        snake[0].x = width
    }
    if (snake[0].y == height) {
        snake[0].y = 0
    }
    if (snake[0].y < 0) {
        snake[0].y = height
    }

    //
    let newX = snake[0].x;
    let newY = snake[0].y;
    // key down
    if (key == "right") {
        newX += box;

    }
    if (key == "left") {
        newX -= box;

    }
    if (key == "up") {
        newY -= box;

    }
    if (key == "down") {
        newY += box;

    }
    //new head
    let newHead = {
        x: newX,
        y: newY
    }
    if (newX == apple.x && newY == apple.y) {
        scores++
        apple = {
            x: getRndInteger(0, 29) * box,
            y: getRndInteger(0, 19) * box
        }
    } else {
        snake.pop()
    }

    snake.unshift(newHead);

    showScores.innerHTML = "Điểm: " + scores

}

let game = setInterval(draw, 100)

window.onload = () => {
    game
}

function stop() {
    clearInterval(game)
}

function start() {
    game = setInterval(draw, 100)
}

function newGame() {
    snake = [];
    snake[0] = {
        x: 0 * box,
        y: 0 * box
    };

    apple = {
        x: getRndInteger(0, 29) * box,
        y: getRndInteger(0, 19) * box
    }

    key = "new";
    scores = 0;
}

function endGame() {
    stop()
    alert("Thua cmnr, được có " + scores + " điểm. Quá GÀ=)) Game mới nhé!!!")
    newGame()
    start()
}

checkS = 0

let keyDown = (event) => {
    keyCheck = event.keyCode
    if (keyCheck == 39 && key != "left") {
        key = "right"
    } else if (keyCheck == 37 && key != "right") {
        key = "left"
    } else if (keyCheck == 38 && key != "down") {
        key = "up"
    } else if (keyCheck == 40 && key != "up") {
        key = "down"
    } else if (keyCheck == 32 && checkS == 0) {
        stop()
        checkS = 1
    } else if (keyCheck == 32 && checkS == 1) {
        start()
        checkS = 0
    }
}
window.addEventListener("keydown", keyDown)

//onclick
function clickUp() {
    if (key != "down")
        key = "up"
}

function clickDown() {
    if (key != "up")
        key = "down"
}

function clickLeft() {
    if (key != "right")
        key = "left"
}

function clickRight() {
    if (key != "left")
        key = "right"
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}