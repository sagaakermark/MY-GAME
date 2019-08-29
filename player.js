class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 8;
        this.point = 0;
    }

    setup() {
        this.sprite = createSprite(this.x, this.y, 30, 30)
        this.sprite.addAnimation("drive", playerAnimation)
        this.sprite.size = 3;
        this.sprite.setCollider("rectangle"),
            0,
            0,
            this.sprite.width / 2,
            this.sprite.height / 2
        //this.score = createDiv('Score: ')
        //this.score.position(RIGHT, BOTTOM)//(width / 2, height / 2)




    }

    draw() {
        if (keyIsDown(UP_ARROW)) {
            console.log("up from main")
            game.player.moveUp();
        } else if (keyIsDown(DOWN_ARROW)) {
            game.player.moveDown();
        } else if (keyIsDown(RIGHT_ARROW)) {
            game.player.moveRight();
        } else if (keyIsDown(LEFT_ARROW)) {
            game.player.moveLeft();
        }

    }
    moveUp() {
        console.log("upp front player")
        this.sprite.position.y -= 3;

    }

    moveDown() {
        this.sprite.position.y += 5;
    }
    moveLeft() {
        this.sprite.position.x -= 5;
    }
    moveRight() {
        this.sprite.position.x += 5;
    }
}
//this.sprite.position.x = mouseX;
//this.sprite.position.y = mouseY;
// this.keyIsDown();
// this.sprite.position.y += this.velocity - 1;
// this.sprite.position.x -= sin(this.sprite.rotation) * this.velocity;



/*keyIsDown() {
    if (keyIsDown(37)) {
        this.sprite.rotation -= 3;

    }

    if (keyIsDown(39)) {
        this.sprite.rotation += 3;

    }

    if (keyIsDown(38)) {

        this.sprite.position.x += sin(this.sprite.rotation) * this.velocity;
        this.sprite.position.y -= cos(this.sprite.rotation) * this.velocity;
    }*/