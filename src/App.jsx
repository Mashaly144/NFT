import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import WelcomePage from './Pages/WelcomePage';
import CardDetailsPage from './Pages/CardDetailsPage';

// import FeaturesPage from './pages/Features/FeaturesPage';

function App() {
  return (
    <div className='main'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<CardDetailsPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
