import { Component } from '@angular/core';
import { StepsData } from './timeline-flow/timeline-flow.options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statusData: StepsData[] = [{
    step: 'This is Step 1',
    status: 'Completed'
  }, {
    step: 'This is Step 2',
    subtext: 'This is a dummy text for sub title for this step. This should be show below the title',
    status: 'Completed'
  }, {
    step: 'Step 3',
    status: 'Completed'
  }, {
    step: 'Step 4',
    status: 'In progress'
  }, {
    step: 'Step 5',
    status: 'Not Started'
  }, {
    step: 'Step 6',
    status: 'Not Started'
  }];
}
