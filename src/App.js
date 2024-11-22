import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Inicio from './single-pages/Inicio';
import Nosotros from './single-pages/Nosotros';
import Servicios from './single-pages/Servicios';
import Proyectos from './single-pages/Proyectos';
import RentaMaquinaria from './single-pages/RentaMaquinaria';
import Contacto from './single-pages/Contacto';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

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
      <div className='footer'>
        <Footer className="item" />
      </div>
    </div> 
  );
};

export default App;
