import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import MovieProfile from './pages/MovieProfile';

const App = () => {
  return (
    <div>
      <Router>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/movieProfile' element={<MovieProfile/>}/>
                </Routes>
        </Router>
    </div>
  )
}

export default App

