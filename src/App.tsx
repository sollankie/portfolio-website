import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <Navigation/>
      <p>Добро пожаловать на мое резюме!</p>
      <Footer/>
    </div>
  );
};

export default App;
