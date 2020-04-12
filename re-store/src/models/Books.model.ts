export interface BookModel {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
}

export interface CartItem extends BookModel {
  count: number;
  total: number;
}