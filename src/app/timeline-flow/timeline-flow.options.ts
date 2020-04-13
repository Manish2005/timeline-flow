export const DEFAULT_STATUS_VALUES: TimelineFlowOptions = {
  statuses: [{
    text: 'Not Started',
    styles: { connectorColor: '', textColor: '#A5A5A5', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'In progress',
    styles: { connectorColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Completed',
    styles: { connectorColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }]
};

export interface TimelineFlowOptions {
  statuses: StatusConfig[];
}

export interface StatusConfig {
  text: string;
  styles?: StatusConfigStyles;
}

interface StatusConfigStyles {
  connectorColor?: string;
  textColor?: string;
  iconClass?: string;
  iconPath?: string;
}

export interface StepsData {
  step: string;
  subtext?: string;
  status: string;
}
