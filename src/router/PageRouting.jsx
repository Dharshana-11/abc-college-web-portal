import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from '../components/students/Details'
import Main from '../components/students/student_table'
import Login from '../components/login/Login'
import PageLayout from '../components/layout/Layout'
import './PageRouting.css'

const PageRouting = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/students" element={<PageLayout><Main /></PageLayout>} />
          <Route path="/student/:id" element={<PageLayout><Details /></PageLayout>} />
        </Routes>
      </Router>

    </div>
  )
}

export default PageRouting