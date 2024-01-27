import { Component } from '@angular/core';
import { CoursService}  from '../cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  title: string = '';
  subject: string = '';
  content: string = '';
  prix: string = '';
  categorie: string = '';
  videoFile: File | null = null;
  imageFile: File | null = null;

  constructor(private coursService: CoursService) {}

  onVideoFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.videoFile = fileList[0];
    }
  }

  onImageFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imageFile = fileList[0];
    }
  }

  onSubmit() {
    if (!this.videoFile || !this.imageFile) {
      alert('Veuillez sélectionner une vidéo et une image.');
      return;
    }

    const formData = new FormData();
    formData.append('video', this.videoFile);
    formData.append('title', this.title);
    formData.append('subject', this.subject);
    formData.append('content', this.content);
    formData.append('prix', this.prix);
    formData.append('categorie', this.categorie);
    formData.append('image', this.imageFile);

    this.coursService.addCours(formData).subscribe(
      (response) => {
        console.log('Cours ajouté avec succès !');
        // Réinitialisez les champs du formulaire si nécessaire
        this.title = '';
        this.subject = '';
        this.content = '';
        this.prix = '';
        this.categorie = '';
        this.videoFile = null;
        this.imageFile = null;
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du cours :', error);
      }
    );
  }
}

