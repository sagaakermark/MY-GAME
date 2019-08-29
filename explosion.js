class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y, 30, 30);
    this.sprite.addAnimation("explode", explosionImg);
    this.sprite.scale = 6.5;
    this.frameCount = frameCount;

    setTimeout(() => {
      this.sprite.remove();
    }, 800);
  }
}