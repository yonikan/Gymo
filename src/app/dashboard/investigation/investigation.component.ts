import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gymo-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent implements OnInit {

  routerName = this.route.snapshot.data['routerName']; 
  
  constructor(    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.routerName);
  }

}
