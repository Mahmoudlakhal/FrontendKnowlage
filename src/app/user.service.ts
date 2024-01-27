import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.153.128:8010/SpringMVC/user/ajouterUser';
  private apiUrl2 = 'http://192.168.153.128:8010/SpringMVC/api/auth/login';
  private apiUrl3 = 'http://192.168.153.128:8010/SpringMVC/user/GetAllUser';
  private apiUrl4 = 'http://192.168.153.128:8010/SpringMVC/user/remove-User';

  constructor(private http: HttpClient) { }

  public createUser(firstName: string, lastName: string, phoneNumber: string, adresse: string, password: string, email: string, headers: HttpHeaders): Observable<User> {
    const user: User = { id: 0, firstName, lastName, phoneNumber, adresse, password, email };
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  login(loginForm: any): Observable<any> {
    return this.http.post(this.apiUrl2, loginForm);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl3);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl4}/${userId}`;
    return this.http.delete(url);
  }
}

