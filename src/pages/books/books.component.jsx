import React from 'react';
import JUST_READ from './justread.data';
import TO_READ from './toread.data';

import Directory from '../../components/directory/directory.component';
import BookList from '../../components/book-list/book-list.component';
import './books.styles.scss'

class BooksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksToRead: TO_READ,
      booksJustRead: JUST_READ

    };
  }

  render() {
    const { booksToRead, booksJustRead } = this.state;
    return (
      /*<div className="books-page">
        {booksToRead.map(({id, ...otherBookToReadProps}) => (
          <BookList key={id} {...otherBookToReadProps} />
        ))}
      </div>*/
      <div>
        <Directory />
        <div className="books-page">
          {booksJustRead
            .map(({ id, ...otherBookJustReadProps }) => (
            <BookList key={id} {...otherBookJustReadProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default BooksPage;