const game = new Game();

function setup() {
    console.log("Heyyyy")
    createCanvas(900, 900);
    game.setup()
    policeSiren.play();

}

function draw() {
    clear()
    background(0)
    game.draw()

}

window.addEventListener("keydown", function (e) {

    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);