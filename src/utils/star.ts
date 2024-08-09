export class Star {
    x: number;
    y: number;
    counter: number;
    radiusMax: number;
    speed: number;
    radius: number;
    context: CanvasRenderingContext2D | null;
  
    constructor(context: CanvasRenderingContext2D | null) {
      this.context = context;
      this.x = getRandomInt(-250, 250); // Assuming a center at (250, 250)
      this.y = getRandomInt(-250, 250);
      this.counter = getRandomInt(1, 500);
      this.radiusMax = getRandomInt(1, 10);
      this.speed = getRandomInt(1, 5);
      this.radius = this.radiusMax / this.speed;
    }
  
    drawStar() {
      this.counter -= this.speed;
  
      if (this.counter < 1) {
        this.counter = 500;
  
        this.x = getRandomInt(-250, 250);
        this.y = getRandomInt(-250, 250);
  
        this.radiusMax = getRandomInt(1, 10);
        this.speed = getRandomInt(1, 5);
      }
  
      let xRatio = this.x / this.counter;
      let yRatio = this.y / this.counter;
  
      let starX = remap(xRatio, 0, 1, 0, 500);
      let starY = remap(yRatio, 0, 1, 0, 500);
  
      this.radius = remap(this.counter, 0, 500, this.radiusMax, 0);
  
      if (!this.context) return;
  
      this.context.beginPath();
      this.context.arc(starX, starY, this.radius, 0, Math.PI * 2, false);
      this.context.closePath();
      this.context.fillStyle = "#FFF";
      this.context.fill();
    }
  }
  
  export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function remap(value: number, istart: number, istop: number, ostart: number, ostop: number): number {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
  }
  