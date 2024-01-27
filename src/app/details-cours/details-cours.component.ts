import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from '../cours.service';
import { Cours } from '../cours/model/Cours';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.css']
})
export class DetailsCoursComponent implements OnInit {
  id!: number; // Identifiant du cours extrait de l'URL
  cours!: Cours ; // Objet Cours pour stocker les détails du cours
  videoUrl!: string;
  constructor(
    private route: ActivatedRoute, private coursService: CoursService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.coursService.getCoursById(this.id).subscribe((data: Cours) => {
      this.cours = data;
      this.videoUrl = this.coursService.getCoursVideoURL(data.id); // Utilisez la méthode de service pour obtenir l'URL de la vidéo
    });
  }

  videoURL(coursId: number): SafeResourceUrl {
    const videoUrl = this.coursService.getCoursVideoURL(coursId);
    console.log('URL de la vidéo :', videoUrl); // Ajoutez cette ligne de débogage
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  // Reste du code pour afficher les détails du cours dans votre modèle HTML
}
