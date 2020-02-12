import React from 'react';
import booksImg from '../../assets/books.jpg'
import './image-banner.styles.scss'

function ImageBanner() {
  // Import result is the URL of your image
  return <img src={booksImg} className="img" />;
}
export default ImageBanner;