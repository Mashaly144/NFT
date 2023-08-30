import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import HomePage from './pages/HomePage.jsx';
import WelcomePage from './Pages/WelcomePage';
import CardDetailsPage from './Pages/CardDetailsPage';

// import FeaturesPage from './pages/Features/FeaturesPage';

function App() {
  return (
    <div className='main'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/details' element={<CardDetailsPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
