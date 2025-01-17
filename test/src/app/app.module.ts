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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http);
};

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
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
