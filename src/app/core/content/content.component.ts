import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition';

@Component({
  selector: 'gymo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [routerTransition]
  
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
