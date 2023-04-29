import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanvasAnimationComponent } from './canvas-animation/canvas-animation.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { KippoHoverCardComponent } from './kippo-hover-card/kippo-hover-card.component';
import { PainterCanvasComponent } from './painter-canvas/painter-canvas.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { PeexTestsExampleComponent } from './peex-tests-example/peex-tests-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasAnimationComponent,
    SpinnerComponent,
    KippoHoverCardComponent,
    PainterCanvasComponent,
    TimepickerComponent,
    PeexTestsExampleComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  entryComponents: [PainterCanvasComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
