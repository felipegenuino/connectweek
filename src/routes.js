import React from 'react'
import { Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Assista from './pages/Assista'
import Programacao from './pages/Programacao'

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="programacao" element={<Programacao />}></Route>
            <Route path="assista-ao-video" element={<Assista />}></Route> 
        </Routes>
    )
}

export default MyRoutes
