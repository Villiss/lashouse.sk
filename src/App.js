import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Design from './components/pages/Design/Design';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import Technologies from './components/pages/Technologies/Technologies'
import Contact from './components/pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/technologia' component={Technologies}/>
        <Route path='/dizajn' component={Design}/>
        <Route path='/kontakt' component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
