import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Projects, Contact, Loading,Equify,DressSense, SallyRise } from './pages';

const App = () => {
  return (
    <main>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/website-portfolio/" element={<Loading />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equify" element={<Equify />} />
          <Route path="/dressSense" element={<DressSense />} />
          <Route path="/sallyrise" element={<SallyRise />} />

        </Routes>
      </Router>
    </main>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Navbar /> : null;

};

export default App;
