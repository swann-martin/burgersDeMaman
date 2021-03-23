export class OurBurgers {
  name: string;
  picture: string;
  price: number;
  ingredients: string;

  constructor(
    name: string,
    picture: string,
    price: number,
    ingredients: string
  ) {
    this.name = name;
    this.picture = picture;
    this.price = price;
    this.ingredients = ingredients;
  }
}
