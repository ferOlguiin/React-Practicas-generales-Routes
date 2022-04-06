import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Formulario from './routes/Formulario';
import Referencias from './routes/Referencias';
import RelojHooks from './routes/RelojHooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './routes/Inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<App/>} >
                <Route index element={<Inicio />} />
                  <Route path='Relojhooks' element={<RelojHooks />} />
                  <Route path='Referencias' element={<Referencias />} />
                  <Route path='Formulario' element={<Formulario />} />
              </Route>
          </Routes> 
        </BrowserRouter>
);

