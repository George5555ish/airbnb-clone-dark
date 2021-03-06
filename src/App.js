import React, {useState} from 'react';

import './App.css';


import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer'
import SearchPage from './SearchPage/SearchPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(false);


  const handleDarkMode = () => {

    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
              <Router>
        <Header handleDarkMode={handleDarkMode} darkMode={darkMode}/>
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
