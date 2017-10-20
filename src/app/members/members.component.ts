import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

@Component({
  selector: 'gymo-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  usersData;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get("../../assets/json/users.json").subscribe((success) => {
      this.usersData = success; 
      // console.log(this.usersData);         
    });
    
  }

}
