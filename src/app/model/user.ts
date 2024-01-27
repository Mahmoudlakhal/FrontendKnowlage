export  class User{
  id!:number;
  firstName!:string;
  lastName!:string;
  phoneNumber!:string;
  adresse!:string;
  password!:string;
  email!:string;



  constructor(id: number, firstName: string, lastName: string, phoneNumber: string, adresse: string, password: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.adresse = adresse;
    this.password = password;
    this.email = email;

  }
}
