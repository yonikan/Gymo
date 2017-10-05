import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gymo-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  @Input() noDataText: any;
  
  constructor() { }

  ngOnInit() {
  }

}
