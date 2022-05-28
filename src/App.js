import React from 'react';

///import Style
import './App.css';

///React Router
import {Routes, Route} from 'react-router-dom';

///import Home
import Home from './components/Home/Home';

///import Header & Footer
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

///import Project, About & Contact
import Project from './components/Project/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

///import Project
import Porsche from './components/Project/Porsche'
import RaceClub from './components/Project/RaceClub'


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/porscherentalexperience" element={<Porsche />}></Route>
        <Route path="/raceclub" element={<RaceClub />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
