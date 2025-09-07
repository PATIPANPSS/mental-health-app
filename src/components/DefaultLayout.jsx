import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FormPage from '../pages/FormPage'
import HotlinePage from '../pages/HotlinePage'
import Ebook from '../pages/Ebook'
import Form2q from '../pages/Form/Form2q'


const DefaultLayout = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/hotline" element={<HotlinePage />} />
            <Route path="/ebook" element={<Ebook />} />

            <Route path='/form-2q' element={<Form2q />} />
          </Routes>
        </main>
    </div>
  )
}

export default DefaultLayout