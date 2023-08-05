import React from 'react';
import { Routes, Route} from "react-router-dom"
import Pageacueille from "../components/pages/Pageacueille"
import Conseil from "../components/pages/Conseil"
import Actualite from "../components/pages/Actualite"
import Home from "../components/pages/Home"
import Newsletter from './pages/newsletter'
import ModifierConseil from './pages/ModifierConseil';
import Read from './pages/Read';

function ContenuPage() {
  return (
    <React.Fragment>
      <section>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pageacueille" element={<Pageacueille />} />
            <Route path="/conseil" element={<Conseil />} />
            <Route path="/actualite" element={<Actualite/>} />
            <Route path="/newsletter" element={<Newsletter/>} />
            <Route path="/modifier/:id" element={<ModifierConseil/>} />
            <Route path="/read/:id" element={<Read/>} />
        </Routes>
      </section>
    </React.Fragment>
  )
}

export default ContenuPage;