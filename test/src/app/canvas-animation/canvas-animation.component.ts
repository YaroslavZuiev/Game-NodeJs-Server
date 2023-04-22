import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-animation',
  template: `
    <canvas #canvas style="border: 1px solid red"></canvas>
  `
})
export class CanvasAnimationComponent implements OnInit {
  @ViewChild('canvas', { static: true }) public canvasRef: ElementRef<HTMLCanvasElement>;

  private ctx: any;
  private animationId: number = 0;
  private radius = 10;
  private x = 80;
  private y = 50;
  private dx = 5;
  private dy = 5;

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ctx.canvas.width = 700;
    this.draw();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.animationId = requestAnimationFrame(() => this.draw());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
  }
}
