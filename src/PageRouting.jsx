import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './Details'
import Main from './Main'
import Login from './Login'
import PageLayout from './Layout'
import './PageRouting.css'

const PageRouting = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/students" element={<PageLayout><Main/></PageLayout>}/>
                <Route path="/student/:id" element={<PageLayout><Details/></PageLayout>}/>
            </Routes>
        </Router>

    </div>
  )
}

export default PageRouting