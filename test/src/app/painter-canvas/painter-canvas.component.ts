import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {map, pairwise, startWith, switchMap, takeUntil, withLatestFrom} from "rxjs/operators";
import {Target} from "@angular/compiler";

@Component({
  selector: 'app-painter-canvas',
  templateUrl: './painter-canvas.component.html',
  styleUrls: ['./painter-canvas.component.css']
})
export class PainterCanvasComponent implements OnInit {

  @ViewChild('canvasRef', {static: true}) public canvasRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('range', {static: true}) public range: ElementRef<HTMLInputElement>;
  @ViewChild('color', {static: true}) public color: ElementRef<HTMLInputElement>;

  public ctx: any;
  public rect: any;
  public scale = window.devicePixelRatio;

  ngOnInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.rect = this.ctx.canvas.getBoundingClientRect();
    this.ctx.canvas.width = this.rect.width * this.scale;
    this.ctx.canvas.height = this.rect.height * this.scale;

    this.ctx.scale(this.scale, this.scale)
    this.draw();
  }

  public draw(): void {
    const mouseMove$ = fromEvent(this.canvasRef.nativeElement, 'mousemove');
    const mouseDown$ = fromEvent(this.canvasRef.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent(this.canvasRef.nativeElement, 'mouseup');
    const mouseOut$ = fromEvent(this.canvasRef.nativeElement, 'mouseout');

    const stream$ = mouseDown$.pipe(
      switchMap((options) => {
        return mouseMove$.pipe(
          map((e) => {
            const coordinates = e as MouseEvent;
            return {
              x: coordinates.offsetX,
              y: coordinates.offsetY
            }
          }),
          pairwise(),
          takeUntil(mouseUp$),
          takeUntil(mouseOut$))
      }),
    )

    stream$.subscribe(([from, to]) => {
      this.ctx.lineWidth = this.range.nativeElement.value;
      this.ctx.strokeStyle = this.color.nativeElement.value;
      this.ctx.beginPath();
      this.ctx.moveTo(from.x, from.y)
      this.ctx.lineTo(to.x, to.y)
      this.ctx.stroke();
    })
  }

  public clearDashboard() {
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  }
}
