const game = new Game();

function setup() {
    const canvas = createCanvas(900, 900);
    canvas.parent("startPage")
    game.setup()
    roadSound.play();
    policeSiren.play();
}

document.querySelector(".startButton").onclick = function () {
    game.gameOn = true
    document.querySelector(".startButton").style.display = "none";
}


window.addEventListener("keydown", function (e) {

    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


function draw() {
    clear()
    background(0)
    game.draw()

}

function keyPressed() {
    if (keyCode == 32) {
        location.reload()
    }
}