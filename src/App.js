import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import Directory from './components/directory/directory.component';
import Banner from './components/banner/banner.component';

function App() {
  return (
    <div>
      <Header/>
      <Directory/>
      <Banner/>
    </div>
  );
}

export default App;
