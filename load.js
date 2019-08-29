let bgRoad;
let bgLand;
let playerAnimation;
let playerSpriteSheet;
let carAnimation;
let carArray;
let obstacleImg;
let explosionImg;
let explosionAnimation;
//let policeSiren;
//let explosionSound;

function preload() {


    policeSiren = loadSound("./images/sounds/PoliceSiren.mp3");
    // explosionSound = loadSound("./images/sounds/zapsplat_explosion_designed_big_distorted_fire_backdraft_002_31082.mp3");

    carArray = [
        "./images/Ambulance.png",
        "./images/Audi.png",
        "./images/Black_viper.png",
        "./images/Car.png",
        "./images/Mini_truck.png",
        "./images/Mini_van.png",
        "./images/taxi.png"
    ].map(imgPath => loadAnimation(imgPath));

    bgRoad = loadImage("./images/ROAD3.png");

    playerAnimation = loadAnimation(
        "./images/1.png",
        "./images/2.png",
        "./images/3.png"
    );

    obstacleImg = loadAnimation("./images/lady.png");

    explosionImg = loadSpriteSheet("./images/pngkit_nuclear-explosion-png_672664.png", 16, 16, 5);
    explosionAnimation = loadAnimation(explosionImg);



}