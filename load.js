let bgRoad;
let bgLand;
let playerAnimation;
let playerSpriteSheet;
let carAnimation;
let carArray;
let obstacleImg;
let explosionImg;
let explosionAnimation;
let policeSiren;
let explosionSound;
let oldLadySound;
let roadSound;
let hittingSound;

function preload() {


    policeSiren = loadSound("./images/sounds/PoliceSiren.mp3");
    explosionSound = loadSound("./images/sounds/explosion.mp3");
    oldLadySound = loadSound("./images/sounds/aaj_0195_FmlScrm3SFX.mp3");
    roadSound = loadSound("./images/sounds/car+driveby2.mp3");
    hittingSound = loadSound("./images/sounds/zapsplat_human_body_slam_against_surface_004_31983.mp3");

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