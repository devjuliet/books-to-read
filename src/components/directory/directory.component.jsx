import React from 'react';
import { Link } from 'react-router-dom';
import './directory.styles.scss';
import SearchBox from '../search-box/search-box.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'to read',
          id: 1,
          linkUrl: 'books/toread'
        },
        {
          title: 'authors',
          id: 2,
          linkUrl: 'authors'
        },
        {
          title: 'just read',
          id: 3,
          linkUrl: 'books/justread'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={'/'}>Home</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {
                this.state.sections.map(({ id, title, linkUrl }) => (
                  <li className="nav-item" key={id}>
                    <Link className="nav-link" to={linkUrl}>{title.toUpperCase()}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <SearchBox />
        </nav>
      </div>
    );
  }
}


export default Directory;