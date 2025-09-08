import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FormPage from '../pages/FormPage'
import HotlinePage from '../pages/HotlinePage'
import Ebook from '../pages/Ebook'
import Form2q from '../pages/Form/Form2q'
import Form9q from '../pages/Form/Form9q'
import Form8q from '../pages/Form/Form8q'


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
            <Route path='/form-9q' element={<Form9q />} />
            <Route path='/form-8q' element={<Form8q />} />
          </Routes>
        </main>
    </div>
  )
}

export default DefaultLayout