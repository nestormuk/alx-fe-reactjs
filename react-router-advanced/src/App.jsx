import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/*' element={ <ProtectedRoute> <Profile /> </ProtectedRoute>  } />
        {/* <Route path='*' element={<Notfound />} /> */}
        <Route path='/blog/:id' element={<BlogPost />} />
       <Route path='/login' element={<Login />} />
      </Routes>
   </Router>
  )
}

export default App
