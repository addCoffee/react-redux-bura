import React from 'react';

import {BookModel} from '../../models/Books.model';

const Book = ({title, author}: BookModel) => {
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
