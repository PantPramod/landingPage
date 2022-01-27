import React from 'react';
import './App.css';
import Header from './Header';
import Cover from './Cover';
import AboutUs from './Components/AboutUs';
function App() {
  return (
    <div className="app">
            <Header/>
            <Cover/>
            <AboutUs/>
    </div>
  );
}

export default App;
