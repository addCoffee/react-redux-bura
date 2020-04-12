import React from 'react';

import {BookModel} from '../../models/Books.model';

interface BookProps {
  book: BookModel;
  onAdd: (bookId: number) => void;
}

const Book = ({book: {title, author, image, price, id}, onAdd}: BookProps) => {
  return (
    <div className="book">
      <img src={image} alt=""/>
      <div className="right-block">
        <div className="details">
          <a className="title">{title}</a>
          <div className="author">{author}</div>
          <div className="price">${price}</div>
        </div>
        <div className="controls">
          <button
            type="button"
            onClick={() => onAdd(id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
