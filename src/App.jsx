import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import './index.css';




const App = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About': return <About />;
      case 'Portfolio': return <Portfolio />;
      case 'Contact': return <Contact />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};
export default App;