import React from 'react'
import { Book } from 'src/models/Books.model';

const Book = ({title, author}: Book) => {
  return (
    <div className="book">
      <div>
        <b>Title:</b> {title}
      </div>
      <div>
        <b>Author:</b> {author}
      </div>
    </div>
  );
}

export default Book;
