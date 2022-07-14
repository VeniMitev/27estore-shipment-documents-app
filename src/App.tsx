import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { Home } from "./Components/Home";
import { ShipmentManifest } from './Components/ShipmentManifest';
import { Pricing } from './Components/Pricing';
import { InvoiceBG } from './Components/InvoiceBG';
import { InvoiceUS } from './Components/InvoiceUS';
import { PackingList } from './Components/PackingList';
import { Dictionary } from './Components/Dictionary';

function App() {

  return (
    <>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/shipment-manifest' element={<ShipmentManifest />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/invoice-bg' element={<InvoiceBG />} />
          <Route path='/invoice-us' element={<InvoiceUS />} />
          <Route path='/packing-list' element={<PackingList />} />
          <Route path='/declaration' element={<Home />} />
          <Route path='/dictionary' element={<Dictionary />} />
        </Routes>
      </div>     
    </>
  )
}

export default App
