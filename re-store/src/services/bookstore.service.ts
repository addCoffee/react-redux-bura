import { Book } from "src/models/Books.model";

export default class BookstoreService {
  getBooks(): Book[] {
    return [
      {
        id: 1,
        title: "You Don't Know JS: ES6 & Beyond",
        author: "Kyle Simpson",
      },
      {
        id: 2,
        title: "You Don't Know JS: Up & Going",
        author: "Kyle Simpson",
      },
      {
        id: 3,
        title: "You Don't Know JS: Async & Perfomance",
        author: "Kyle Simpson",
      }
    ];
  }
}