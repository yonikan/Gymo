import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gymo-add-widget-dialog',
  templateUrl: './add-widget-dialog.component.html',
  styleUrls: ['./add-widget-dialog.component.scss']
})
export class AddWidgetDialogComponent implements OnInit {
  widgetTypes = [
    'Line Chart',
    'Pie Chart',
    'Bars Chart'
  ];
  constructor() { }

  ngOnInit() {
  }

}
