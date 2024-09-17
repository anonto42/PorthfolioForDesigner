import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
