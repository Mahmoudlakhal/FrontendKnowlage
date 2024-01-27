import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private router: Router) {}

  deconnexion() {
    // Effectuer des opérations de déconnexion si nécessaire

    // Naviguer vers la page de signup
  }
}


