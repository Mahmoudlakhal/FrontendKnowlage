import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {HttpHeaders} from "@angular/common/http";
import {UserService} from "../user.service";
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

@Component({
  selector: 'app-signe-up',
  templateUrl: './signe-up.component.html',
  styleUrls: ['./signe-up.component.css']
})
export class SigneUpComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';
  phoneNumber: string = '';
  adresse: string = '';


  newUser = new User(0,"", '', '', '', '', ''); // Initialisez dateNaissance avec la date du jour ou une autre date valide

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // firstName: string, lastName: string, phoneNumber: string, adresse: string, password: string, email: string, dateNaissance: Date, role:string
  onSubmit(): void {
    console.log('First Name:', this.newUser.firstName);
    console.log('Last Name:', this.newUser.lastName);
    console.log('Phone Number:', this.newUser.phoneNumber);
    console.log('Adresse:', this.newUser.adresse);
    console.log('Password:', this.newUser.password);
    console.log('Email:', this.newUser.email);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.userService.createUser(this.newUser.firstName, this.newUser.lastName,this.newUser.phoneNumber, this.newUser.adresse,this.newUser.password, this.newUser.email,  headers )
      .subscribe(
        (response) => {
          console.log('Nouvel utilisateur enregistré:', response);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);

          // Affichez les détails de l'erreur
          console.log('Détails de l\'erreur:', error.error);
        }
      );
  }

}
