export class TD {
  idTd: number;
  titre: string;
  sujet: string;
  description: string;
  categorie: string;
  prix: string;
  imageFile: File | null;

  constructor() {
    this.idTd = 0;
    this.titre = '';
    this.sujet = '';
    this.description = '';
    this.categorie = '';
    this.prix = '';
    this.imageFile = null;
  }
}

