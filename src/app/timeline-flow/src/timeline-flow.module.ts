import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineFlowComponent} from './timeline-flow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimelineFlowComponent],
  exports: [TimelineFlowComponent]
})
export class TimelineFlowModule {
}
