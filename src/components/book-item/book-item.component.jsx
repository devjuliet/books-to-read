import React from 'react';
import './book-item.styles.scss';

const BookItem = ({title, author, country, pages, year}) => (
  <div className="book-item">
    <div className="card w-25">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        <p className="card-text">Country: {country}</p>
        <p className="card-text">Pages: {pages}</p>
        <p className="card-text">Year: {year}</p>
      </div>
    </div>
  </div>
);

export default BookItem;