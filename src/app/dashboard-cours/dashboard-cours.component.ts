// dashboard-cours.component.ts
import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { Cours } from '../cours/model/Cours';

@Component({
  selector: 'app-dashboard-cours',
  templateUrl: './dashboard-cours.component.html',
  styleUrls: ['./dashboard-cours.component.css']
})
export class DashboardCoursComponent implements OnInit {
  coursList: Cours[] = [];

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.loadCours();
  }

  loadCours(): void {
    this.coursService.getAllCours().subscribe(data => {
      this.coursList = data;
    });
  }

  deleteCours(coursId: number): void {
    this.coursService.deleteCours(coursId).subscribe(() => {
      // Mettez à jour la liste après la suppression
      this.loadCours();
    });
  }
}

