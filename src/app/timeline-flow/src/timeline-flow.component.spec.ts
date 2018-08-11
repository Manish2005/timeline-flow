import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimelineFlowComponent} from './timeline-flow.component';
import {DEFAULT_STATUS_VALUES} from './timeline-flow.options';

describe('TimelineFlowComponent', () => {
  let component: TimelineFlowComponent;
  let fixture: ComponentFixture<TimelineFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineFlowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty if no styles specified', () => {
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    delete component.options.statuses[0].styles;
    const resp = component.getStyles({status: 'Not Started'}, 'connector-styles');
    expect(Object.keys(resp).length).toEqual(0);
  });

  it('should return empty connector styles if config does not contain borderColor', () => {
    component.options = DEFAULT_STATUS_VALUES;
    const resp = component.getStyles({status: 'In progress'}, 'connector-styles');
    expect(Object.keys(resp).length).toEqual(0);
  });

  it('should return connector styles if config contains borderColor', () => {
    const color = '#ff0000';
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.borderColor = color;
    const resp = component.getStyles({status: 'Not Started'}, 'connector-styles');
    expect(Object.keys(resp).length).toEqual(1);
    expect(resp['border-left-color']).toEqual(color);
  });


  it('should return empty text styles if config does not contain textColor', () => {
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.textColor = '';
    const resp = component.getStyles({status: 'Not Started'}, 'text-styles');
    expect(Object.keys(resp).length).toEqual(0);
  });

  it('should return text styles if config contains borderColor', () => {
    const color = '#ff0000';
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.textColor = color;
    const resp = component.getStyles({status: 'Not Started'}, 'text-styles');
    expect(Object.keys(resp).length).toEqual(1);
    expect(resp['color']).toEqual(color);
  });


  it('should return empty icon styles if config does not contain iconPath', () => {
    component.options = DEFAULT_STATUS_VALUES;
    const resp: any = component.getStyles({status: 'In progress'}, 'icon-styles');
    expect(resp.content).toBeUndefined();
  });

  it('should return icon styles if config contains iconPath', () => {
    const path = '/assets/test.png';
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.iconPath = path;
    const resp: any = component.getStyles({status: 'Not Started'}, 'icon-styles');
    expect(resp.content).toEqual(`url(${path})`);
  });


  it('should return empty icon class if config does not contain iconClass', () => {
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.iconClass = '';
    const resp: any = component.getStyles({status: 'Not Started'}, 'icon-class');
    expect(Object.keys(resp).length).toEqual(0);
  });

  it('should return icon class if config contains iconClass', () => {
    const iconClass = 'not-started';
    component.options = JSON.parse(JSON.stringify(DEFAULT_STATUS_VALUES));
    component.options.statuses[0].styles.iconClass = iconClass;
    const resp: any = component.getStyles({status: 'Not Started'}, 'icon-class');
    expect(resp[iconClass]).toEqual(true);
  });
});
