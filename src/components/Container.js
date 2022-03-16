import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

export default function Container() {
  
  // since the initial state is "Home", the Home page is displayed at the http://localhost:3000/ route.
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}










