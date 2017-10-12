import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gymo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  roles = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'super-user', viewValue: 'Super-user'},
    {value: 'user', viewValue: 'User'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
