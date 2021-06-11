import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"


import './App.css';
import Navbar from './components/Navbar';
import Design from './components/pages/Design/Design';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import Technologies from './components/pages/Technologies/Technologies'
import Contact from './components/pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop'


function App() {
  document.title = "LASHOUSE"
  const location = useLocation()
  return (
    <div>
    <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Home}/>
        <Route path='/technologia' component={Technologies}/>
        <Route path='/dizajn' component={Design}/>
        <Route path='/kontakt' component={Contact}/>
      </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
