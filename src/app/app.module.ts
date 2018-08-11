import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineFlowComponent } from './timeline-flow/timeline-flow.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineFlowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
