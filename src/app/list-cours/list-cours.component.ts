import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursService } from '../cours.service';
import { Cours } from '../cours/model/Cours';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {
  listCours: Cours[] = []; // Cette variable contiendra la liste des cours

  dataSource = new MatTableDataSource<Cours>(this.listCours);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedPrix: string = ''; // Valeur sélectionnée du prix
  selectedCategorie: string = ''; // Valeur sélectionnée de la catégorie

  constructor(private coursService: CoursService) {}

  applyFilters(): void {
    // Réinitialiser la liste des cours à sa valeur d'origine
    this.listCours = [];

    // Filtrer les cours en fonction des valeurs sélectionnées
    this.coursService.getAllCours().subscribe((data: any[]) => {
      this.listCours = data.filter(cours => {
        return (
          (!this.selectedPrix || cours.prix === this.selectedPrix) &&
          (!this.selectedCategorie || cours.categorie === this.selectedCategorie)
        );
      });

      // Mettre à jour la source de données et le paginator
      this.dataSource = new MatTableDataSource<Cours>(this.listCours);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.coursService.getAllCours().subscribe((data: any[]) => {
      this.listCours = data;

      // Mettre à jour la source de données et le paginator initialement
      this.dataSource = new MatTableDataSource<Cours>(this.listCours);
      this.dataSource.paginator = this.paginator;
    });
  }

  getCoursImageURL(coursId: number): string {
    return this.coursService.getCoursImageURL(coursId); // Remplacez getCoursImageURL par la méthode appropriée dans votre service
  }
}
