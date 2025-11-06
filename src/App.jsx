import React from 'react'
import Home from "./Home/Home"
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import { Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="course" 
          element={authUser ? <Courses /> : <Navigate to="/signup" />} 
        />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
