import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineFlowModule } from './timeline-flow';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimelineFlowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
