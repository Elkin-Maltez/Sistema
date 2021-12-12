import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/menu/menu'
import Inicio from './Components/pages/inicio'
import Nosotros from './Components/pages/nosotros';
import Ubicacion from './Components/pages/ubicacion';
import Login from './Components/pages/login';

//Vista de administrador
import Contrato from './Components/pages/contrato';
import Empleado from './Components/pages/empleado';
import Pago from './Components/pages/pago';
import TAveria from './Components/pages/averia/taveria';
import ReporteContrato from './Components/pages/reporte-contrato';
import ReportePago from './Components/pages/reporte-pago';
import ReporteAveria from './Components/pages/reporte-averia';

//Vista de Cliente
import Averia from './Components/pages/averia';
import LPago from './Components/pages/pago/lpago';

function App() {


  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Ubicacion' element={<Ubicacion/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Contrato' element={<Contrato/>}/>
          <Route path='/Empleado' element={<Empleado/>}/>
          <Route path='/Pago' element={<Pago/>}/>
          <Route path='/LAverias' element={<TAveria/>}/>
          <Route path='/ReporteContrato' element={<ReporteContrato/>}/>
          <Route path='/ReportePago' element={<ReportePago/>}/>
          <Route path='/ReporteAveria' element={<ReporteAveria/>}/>
          
          <Route path='/Averia' element={<Averia/>} />
          <Route path='/LPago' element={<LPago/>}/>
        </Routes>
      </Router>
  );
}

export default App;
