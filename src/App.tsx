import React from 'react';
import './App.css';
import './styles/GlobalStyles.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Experience from './components/Experience';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Contacts /> 
      <AboutMe />
      <Education /> 
      <Skills />
      <Experience /> 
      <Projects />
      
       
        
      <Footer />
    </div>
  );
};

export default App;

