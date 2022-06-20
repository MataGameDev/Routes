import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Portafolio from './Components/Portafolio/Portafolio';
import CurriculumVitae from './Components/Curriculum Vitae/CurriculumVitae';
import Contacto from './Components/Contacto/Contacto';
//import Notes from './Components/Notes/Notes';
import Error404 from './Components/Error/404';

const  AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CurrculumVitae' element={<CurriculumVitae/>}/>
            <Route path='/Portafolio' element={<Portafolio />}/>
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;
