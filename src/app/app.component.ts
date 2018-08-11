import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statusData: any[] = [{
    step: 'Step 1',
    status: 'Completed'
  }, {
    step: 'Step 2',
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
