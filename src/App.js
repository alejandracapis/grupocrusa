import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import RentaMaquinaria from './pages/RentaMaquinaria';
import Contacto from './pages/Contacto';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <div className='App'>
      <nav className='top-navbar'>
        <NavBar className="item" />
      </nav>
      <div className='center-main'>
        <Routes className="item">
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/renta-maquinaria" element={<RentaMaquinaria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <div>
        <Footer className="item" />
      </div>
    </div> 
  );
};

export default App;
