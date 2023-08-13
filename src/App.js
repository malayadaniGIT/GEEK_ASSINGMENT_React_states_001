import React, { useState } from 'react';
import './App.css';
import Section from './Components/Section';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <div className={`App ${themeClass}`}>
      <div className="header">
        <h1>OverReacted</h1>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
      <Section 
        h1="The WET Codbase"
        p1="Sunday 4th,2020"
        p2="Come waste your time with me"
        span="11 min read"
      />
      <Section
        h1="Goodby, Clean Code"
        p1="Friday 22nd,2019"
        p2="Let clean code guide you. Then let it go."
        span="5 min read"
      />
      <Section
        h1="My Decade In Review"
        p1="Saturday 11th,2018"
        p2="A personal Reflection."
        span="5 min read"
      />
      <Section
        h1="What Are The React Team Priciples"
        p1="Thursday 4th,2015"
        span="5 min read"
      />
    </div>
  );
}

export default App;
