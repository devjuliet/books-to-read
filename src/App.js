import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import BooksPage from './pages/books/books.component';
import AuthorsPage from './pages/authors/authors.component';

function App() {
  return (
    <div className="bg-light">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/books/justread' component={BooksPage}/>
        <Route path='/books/toread' component={BooksPage}/>
        <Route path='/authors' component={AuthorsPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
