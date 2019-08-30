class Game {

    constructor() {
        this.background = new Background();
        this.player = new Player(450, 450);
        this.cars = [];
        this.carArray;
        this.obstacles = [];
        this.explosions = [];
        this.point = 0;
        this.gameOn = false;
        this.gameOver = false;

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

        if (this.point >= 10) {
            fill("white");
            textSize(60);
            text("CONGRATS, YOU WIN!!", 130, 350);
            this.cars.forEach(car => car.sprite.remove())
            this.obstacles.forEach(oldLady => oldLady.sprite.remove())
            this.gameOn = false

        }

        if (this.gameOver == true) {
            fill("white");
            textSize(50);
            let gameEnd = text("GAME OVER", 305, 320)
            text("Press SPACE to restart", 200, 450)
            policeSiren.pause()

        }


        if (this.gameOn === false || this.gameOver == true) return;



        // car
        if (frameCount % 150 === 0) {
            for (let i = 0; i < 3; i++) {
                let randomIndex = Math.floor(Math.random() * carArray.length)
                let newCar = new Car(i * random(250, 300) + random(100, 250), -200, carArray[randomIndex]);
                newCar.setup();
                this.cars.push(newCar);
            }

        }
        this.cars.forEach(car => car.draw());


        this.cars.forEach((car, i) => {
            this.player.sprite.collide(car.sprite, () => {
                car.sprite.remove();
                this.cars.splice(i, 1);
                this.gameOver = true;
                explosionSound.play();
                let explode = new Explosion(
                    this.player.sprite.position.x,
                    this.player.sprite.position.y - 159
                );

                setTimeout(() => {
                    noLoop();

                }, 500)




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
                oldLadySound.play();
                hittingSound.play();
                this.point++
                this.obstacles.splice(i, 1);



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




    }
}