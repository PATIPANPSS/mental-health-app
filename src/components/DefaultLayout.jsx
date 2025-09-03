import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FormPage from '../pages/FormPage'
import HotlinePage from '../pages/HotlinePage'
import Ebook from '../pages/Ebook'

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
          </Routes>
        </main>
    </div>
  )
}

export default DefaultLayout