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
    this.router.navigate(['/rgupta']);
  }

  navigateToGilbert() {
    this.router.navigate(['/glamphere']);
  }
  navigateToAlex() {
    this.router.navigate(['/aweinstein']);
  }

  navigateToBen() {
    this.router.navigate(['/bsamuels']);
  }

  navigateToRodney() {
    this.router.navigate(['/rworkman']);
  }
}

