import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <Navigation/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
