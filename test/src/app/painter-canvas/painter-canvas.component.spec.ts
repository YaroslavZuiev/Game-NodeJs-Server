import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterCanvasComponent } from './painter-canvas.component';

describe('PainterCanvasComponent', () => {
  let component: PainterCanvasComponent;
  let fixture: ComponentFixture<PainterCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainterCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
