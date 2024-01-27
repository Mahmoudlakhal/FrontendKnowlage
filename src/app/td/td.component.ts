import { Component } from '@angular/core';
import {TD} from "../model/TD";
import {TDService} from "../td.service";


@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css'],
})
export class TDComponent {
  td: TD = new TD();

  constructor(private tdService: TDService) {}

  onSubmit() {
    this.tdService.addTDWithImage(this.td).subscribe((response) => {
      console.log('TD ajouté avec succès', response);
      this.td = new TD(); // Réinitialisez le formulaire après l'ajout
    });
  }
}

