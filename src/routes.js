import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Assista from './pages/Assista'
import Programacao from './pages/Programacao'

function MyRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="programacao" element={<Programacao />}></Route>
        <Route path="assista-ao-video" element={<Assista />}></Route>
      </Routes>
    </main>
  )
}

export default MyRoutes
