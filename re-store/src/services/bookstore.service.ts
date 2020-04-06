import {BookModel} from "src/models/Books.model";

export default class BookstoreService {
  getBooks(): BookModel[] {
    return [
      {
        id: 1,
        title: "You Don't Know JS: ES6 & Beyond",
        author: "Kyle Simpson",
        price: 32,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41arrvfm3fL._SX329_BO1,204,203,200_.jpg',
      },
      {
        id: 2,
        title: "You Don't Know JS: Up & Going",
        author: "Kyle Simpson",
        price: 17,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg',
      },
      {
        id: 3,
        title: "You Don't Know JS: Async & Perfomance",
        author: "Kyle Simpson",
        price: 14,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Kb27EcNPL._SX331_BO1,204,203,200_.jpg',
      }
    ];
  }
}