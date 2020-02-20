import React from 'react';
import './book-list.styles.scss';
import BookItem from '../book-item/book-item.component';

const BookList = ({ items }) => (
  <div className="book-list">
    <div className="list">
      {items
        .map(({ id, ...otherItemProps }) => (
          <BookItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default BookList;