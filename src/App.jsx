import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import Home from './components/Home';
import Curriculum from './pages/Curriculum';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/' element={<Home />}/>
          <Route path='/curriculum' element={<Curriculum />}/>
          <Route path='/proyectos' element={<Proyectos />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
