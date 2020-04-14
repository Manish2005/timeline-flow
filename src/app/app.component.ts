import { Component } from '@angular/core';
import { StepsData, StatusConfig } from './timeline-flow/timeline-flow.options';

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

  StatusValues: StatusConfig[] = [{
    text: 'Not Started',
    styles: { pipeColor: '', textColor: '#A5A5A5', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'In progress',
    styles: { pipeColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Completed',
    styles: { pipeColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }];

  CustomStatusValues: StatusConfig[] = [{
    text: 'Pending',
    styles: { pipeColor: '#F00', textColor: '#F00', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'Working on It',
    styles: { pipeColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Done',
    styles: { pipeColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }];

  CustomStatusData: StepsData[] = [{
    step: 'This is Step 1',
    status: 'Done'
  }, {
    step: 'This is Step 2',
    subtext: 'This is a dummy text for sub title for this step. This should be show below the title',
    status: 'Done'
  }, {
    step: 'Step 3',
    status: 'Done'
  }, {
    step: 'Step 4',
    status: 'Working on It'
  }, {
    step: 'Step 5',
    status: 'Pending'
  }, {
    step: 'Step 6',
    status: 'Pending'
  }];
}
