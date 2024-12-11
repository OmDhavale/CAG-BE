import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Studentlogin from './pages/Studentlogin';
import Teacherlogin from './pages/Teacherlogin';
import Flr1 from './pages/layouts/Flr1';
import Flr2 from './pages/layouts/Flr2';
import Flr3 from './pages/layouts/Flr3';
import Flr4 from './pages/layouts/Flr4';
import Flr5 from './pages/layouts/Flr5';
import Flr6 from './pages/layouts/Flr6';
import Flr7 from './pages/layouts/Flr7';
function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/studentlogin' element={<Studentlogin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/teacherlogin' element={<Teacherlogin/>}/>
        <Route path='/flr1' element={<Flr1/>}/>
        <Route path='/flr2' element={<Flr2/>}/>
        <Route path='/flr3' element={<Flr3/>}/>
        <Route path='/flr4' element={<Flr4/>}/>
        <Route path='/flr5' element={<Flr5/>}/>
        <Route path='/flr6' element={<Flr6/>}/>
        <Route path='/flr7' element={<Flr7/>}/>
      </Routes>
    
  );
}

export default App;
