class Game {

    // stop loop after collision with car
    // create game over text
    // space between cars 
    // go between cars without crash
    // sounds
    // replay game
    // game over
    // winning

    constructor() {
        this.background = new Background();
        this.player = new Player(450, 450);
        this.cars = [];
        this.carArray;
        this.obstacles = [];
        this.explosions = [];
        this.point = 0;
        //this.score = 0;

    }
    preload() {
        this.player.preload();
    }

    setup() {
        this.background.setup();
        this.player.setup();
    }

    draw() {
        this.background.draw();
        this.player.draw();
        drawSprites()


        // car
        if (frameCount % 500 === 0) {
            for (let i = 0; i < 3; i++) {
                let randomIndex = Math.floor(Math.random() * carArray.length)
                let newCar = new Car(i * 200 + random(100, 500), -200, carArray[randomIndex]);
                newCar.setup();
                this.cars.push(newCar);
            }

            /* carArray.forEach((animation, i) => {
                if (Math.random() < 0.5) {
                    
                }
            }); */
        }
        this.cars.forEach(car => car.draw());


        this.cars.forEach((car, i) => {
            this.player.sprite.collide(car.sprite, () => {
                car.sprite.remove();
                this.cars.splice(i, 1);

                let explode = new Explosion(
                    this.player.sprite.position.x,
                    this.player.sprite.position.y - 159
                );
                //if (this.collisionCeck(car, this.player)) {
                setTimeout(() => {
                    noLoop();

                }, 500)

                //}
                explode.setup();

            });
        });

        this.explosions.forEach(explosion => explosion.draw());


        // lady

        if (frameCount > 120 && frameCount % 120 === 0) {
            let Saga = new Obstacle
            Saga.setup()
            this.obstacles.push(Saga);
        }

        this.obstacles.forEach((obstacle, index) => {
            // to remove obstacle when at end of canvas
            if (obstacle.x + obstacle.width > width) {
                this.obstacles.splice(index, 1);
            }


        });
        this.obstacles.forEach(obs => obs.draw());
        console.log(this.obstacles)

        this.obstacles.forEach((obstacle, i) => {
            this.player.sprite.collide(obstacle.sprite, () => {
                obstacle.sprite.remove();
                this.point++
                this.obstacles.splice(i, 1);

                if (point >= 1) {
                    fill("black");
                    textSize(50);
                    text("YOU WIN, CONGRATS!", 250, 300);
                }

                let explode = new Explosion(
                    this.player.sprite.position.x,
                    this.player.sprite.position.y - 159
                );


                explode.setup();
            });
        });



        fill("black");
        textSize(30);
        //textAlign(RIGHT, BOTTOM);
        text(`Score:${this.point} `, 50, 50);
        //textFont();



        //     function drawScore() {
        //        fill("blue");
        //         rect(this.x, this.y, this.width, this.height);
        //            textSize(16);
        //            textAlign(RIGHT, BOTTOM);
        //            text("Score: ", 0, 0)
        //   }

    }
}