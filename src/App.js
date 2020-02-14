import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="bg-light">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
