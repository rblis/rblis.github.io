import React from 'react';
import  {useNavigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import RedirectPage from './pages/RedirectPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/happybirthday" element={<RedirectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
