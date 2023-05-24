import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/chart']);
  }
}
