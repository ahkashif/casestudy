import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header';
import './App.css';
import '../src/styles/main.scss';
import Homepage from './pages/homepage/homepage';
import Products from './pages/products/products';
import SignIn from './pages/signin/signin';
import Register from './pages/register/register';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
