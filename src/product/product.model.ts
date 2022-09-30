export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatingRating: number;
  description: string;
  adventaged: string;
  categories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
