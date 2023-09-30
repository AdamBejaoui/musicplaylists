import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Songs from './assets/pages/Songs';
import Add from './assets/pages/Add';
import Update from './assets/pages/update';
import Login from './assets/pages/login';
import Signup from './assets/pages/Signup'
import "./style.css"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/home'element={<Songs/>}/>
        <Route path='/add'element={<Add/>}/>
        <Route path='/update/:id'element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;