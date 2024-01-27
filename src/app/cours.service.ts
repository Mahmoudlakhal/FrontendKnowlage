import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cours} from "./cours/model/Cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://192.168.153.128:8010/SpringMVC/Cours'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  addCours(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCours`, formData);
  }


  getAllCours(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/display`);
  }

  getCoursImageURL(coursId: number): string {
    // Construisez l'URL en fonction de l'ID du cours
    return `${this.apiUrl}/displayImage/${coursId}`;
  }

  getCoursVideoURL(coursId: number): string {
    // Construisez l'URL en fonction de l'ID du cours
    return `${this.apiUrl}/displayVideo/${coursId}`;
  }

  getVideoUrl(coursId: number): string {
    // Construisez l'URL en fonction de l'ID du cours
    return `${this.apiUrl}/displayVideo/${coursId}`;
  }

  getCoursById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`http://192.168.153.128:8010/SpringMVC/Cours/${id}`);
  }

  deleteCours(coursId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-Cours/${coursId}`);
  }

}
