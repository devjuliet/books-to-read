import React from 'react';
import './header.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
 


const Header = () => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" >
        <FontAwesomeIcon icon={faBookmark} />  Julesbook 
      </a>
    </nav>
  </div>

);

export default Header;