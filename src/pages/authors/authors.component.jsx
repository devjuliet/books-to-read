import React from 'react';
import AUTHORS_DATA from './authors.data.js';

class AuthorsPage extends React.Component{
  constructor(){
    super();
    this.state = {
      collections: AUTHORS_DATA
    };
  }

  render(){
    return(
      <div className="">
        AUTHORS PAGE
      </div>
    );
  }

}

export default AuthorsPage;