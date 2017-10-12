import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gymo-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  languages = [
    {value: 'en', viewValue: 'English'},
    {value: 'sp', viewValue: 'Spanish'},
    {value: 'he', viewValue: 'Hebrew'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
