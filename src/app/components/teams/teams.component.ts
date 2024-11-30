import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  standalone: true,
})
export class TeamsComponent implements OnInit {
  constructor(private router: Router) { }
  
  ngOnInit() {}

  navigateToRajGupta() {
    this.router.navigate(['/rajgupta']);
  }

  navigateToGilbert() {
    this.router.navigate(['/gilbert']);
  }
}