
// eslint-disable-next-line no-unused-vars
import React from 'react'

import "./App.css"
import PagePrincipale from './components/PagePrincipale';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <PagePrincipale />
    </BrowserRouter>
  )
}

export default App;