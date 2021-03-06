import React from 'react';
import ImageBanner from '../image-banner/image-banner.component';
import './banner.styles.scss';

const Banner = () => (
  <div>
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container">
        <h1 className="display-4">Books by Julieta</h1>
        <p className="lead">This is a simple React App that shows the books I have read or will read.</p>
      </div>
    </div>
    <ImageBanner/>
    </div>



);

export default Banner;