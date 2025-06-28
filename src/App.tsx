import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ApiDocs from './pages/ApiDocs'
import Demos from './pages/Demos'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiDocs />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App