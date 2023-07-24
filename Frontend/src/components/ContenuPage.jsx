import React from 'react';
import { Routes, Route} from "react-router-dom"
import Pageacueille from "../components/pages/Pageacueille"
import Conseil from "../components/pages/Conseil"
import Actualite from "../components/pages/Actualite"
import Home from "../components/pages/Home"
import Newsletter from './pages/newsletter';

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
        </Routes>
      </section>
    </React.Fragment>
  )
}

export default ContenuPage;