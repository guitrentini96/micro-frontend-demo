import React from 'react'
import './App.css';
import Home from './pages/Home'
import Def from './pages/Def'
import Musics from './pages/Musics'
import MusicsMF from './pages/MusicsMF';

import  Parcel  from 'single-spa-react/parcel';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = ({name}) => {
  return (
    <BrowserRouter basename='mmdz'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/musics" element={<MusicsMF/>}/>
        <Route path="/def" element={<Def/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App