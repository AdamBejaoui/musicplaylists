import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Songs from './assets/pages/Songs';
import Add from './assets/pages/Add';
import Update from './assets/pages/update';
import "./style.css"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Songs/>}/>
        <Route path='/add'element={<Add/>}/>
        <Route path='/update'element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;