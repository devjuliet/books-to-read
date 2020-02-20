import React from 'react';
import Directory from '../../components/directory/directory.component';
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
        <Directory/>
      </div>
    );
  }

}

export default AuthorsPage;