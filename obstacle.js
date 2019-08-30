class Car {
    constructor(x, y, animation) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.velocity = 5.5;
    }

    setup() {
        this.sprite = createSprite(this.x, this.y, 30, 30);
        this.sprite.addAnimation("drive", this.animation);
        this.sprite.scale = 1;
        this.sprite.mirrorY(-1);
        // this.sprite.debug = true
        this.sprite.setCollider(
            "rectangle",
            0,
            0,
            this.sprite.width / 2.5,
            this.sprite.height / 1.3
        );

    }

    draw() {
        this.sprite.position.y += this.velocity;
    }
}

class Obstacle {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.y = random(height, -800) //height - 800; // this.y = random(0, height);
        this.x = 0 - 100;
    }

    setup() {
        this.sprite = createSprite(this.x, this.y)
        this.sprite.addAnimation("walk", obstacleImg)
        this.sprite.scale = 0.5
        //this.sprite.debug = true
        this.sprite.setCollider("rectangle"),
            0,
            0,
            this.sprite.width / 2,
            this.sprite.height / 1.5
    }

    draw() {
        /* image(obstacleImg, this.x, this.y, this.width, this.height) */
        // how fast
        this.sprite.position.x += 3;

    }
}