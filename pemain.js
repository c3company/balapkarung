class pemain {
  constructor(x, y) {
    this.d = 50;
    this.x = x;
    this.y = y;
    this.loncat = 15;
  }
  tampilkan() {
    image(img1, this.x, this.y);
    image(img2, this.x, this.y);
  }
  maju() {
    this.x += this.loncat;
  }
  cekfinish() {
    if (this.x > 550) {
      textSize(50);
      textAlign(CENTER);
      text("FINISH", width / 2, height / 2);
      noLoop()
      bs.stop()
      bf.play();
    }
  }
}
