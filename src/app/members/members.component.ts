import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

@Component({
  selector: 'gymo-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  
  constructor() { }

  ngOnInit() {
  }

}
