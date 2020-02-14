import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Directory from './components/directory/directory.component';
import Banner from './components/banner/banner.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="bg-light">
      <Header/>

      <Directory/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
