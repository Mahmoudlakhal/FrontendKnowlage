import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TD} from "./model/TD";

@Injectable({
  providedIn: 'root',
})
export class TDService {
  private apiUrl = 'http://192.168.153.128:8010/td';

  constructor(private http: HttpClient) {}

  addTDWithImage(td: TD): Observable<TD> {
    const formData = new FormData();
    if (td.imageFile) {
      formData.append('imageFile', td.imageFile);
    }
    formData.append('titre', td.titre);
    formData.append('sujet', td.sujet);
    formData.append('description', td.description);
    formData.append('categorie', td.categorie);
    formData.append('prix', td.prix);

    return this.http.post<TD>('http://192.168.153.128:8010/td/add-td', formData);
  }
}


