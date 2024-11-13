import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <Navigation/>
      <AboutMe/>
      <Footer/>
    </div>
  );
};

export default App;
