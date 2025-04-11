import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav>
                
      <ul>
        <li>
          <button
            className={currentPage === 'About' ? 'active' : ''}
            onClick={() => setCurrentPage('About')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={currentPage === 'Portfolio' ? 'active' : ''}
            onClick={() => setCurrentPage('Portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className={currentPage === 'Contact' ? 'active' : ''}
            onClick={() => setCurrentPage('Contact')}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            className={currentPage === 'Resume' ? 'active' : ''}
            onClick={() => setCurrentPage('Resume')}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;