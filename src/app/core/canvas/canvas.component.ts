import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { routerTransition } from '../router.transition';

@Component({
  selector: 'gymo-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  // animations: [routerTransition]
  
})
export class CanvasComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
