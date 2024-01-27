export class Cours {
  id!: number;
  title!: string;
  subject!: string;
  content!: string;
  prix!: Prix;
  categorie!: Categorie;
  video!: Uint8Array;
  image!: Uint8Array;
}

enum Prix {
  Payant="Payant", Gratuit="Gratuit"
}

enum Categorie {
  développement_Web="développement_Web",Machin_Learning="Machin_Learning",Lunix="Lunix",Devops="Devops"
}
