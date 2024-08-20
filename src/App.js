import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Beginner from './components/pages/Beginner';
import Intermediate from './components/pages/Intermediate';
import Advanced from './components/pages/Advanced';

function App() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#programs-section') {
      window.scrollTo({
        top: 610,
        behavior: 'smooth',
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs/:type' element={<Programs />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path='/programs/beginner' element={<Beginner />} />
          <Route path='/programs/intermediate' element={<Intermediate />} />
          <Route path='/programs/advanced' element={<Advanced />} />
        </Routes>
      </Router>
    </>
      

  );
}

export default App;
