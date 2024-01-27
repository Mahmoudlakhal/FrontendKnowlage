export default class Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  like: number;

  constructor(id: number, title: string, price: number, quantity: number, like: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.like = like;
  }
}

