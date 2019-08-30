class Background {
    constructor() {
        //this.xRoad = 0;
        //this.xLand = 0;
        this.yRoad = 0;
        //this.yLand = 0;
    }
    setup() {

    }
    draw() {
        // image(bgRoad, 0, 0, 800, 800)
        this.yRoad = this.yRoad + 12;
        if (this.yRoad > height) {
            this.yRoad = 0;

        }
        image(bgRoad, 0, this.yRoad, height);
        image(bgRoad, 0, this.yRoad - height, height);
    }

}