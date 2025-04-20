import React from "react";

const Header = ({ currentPage, setCurrentPage }) => {
    const sections = [ 'About', 'Portfolio', 'Contact', 'Resume' ]; 

    return (
        <header>
            <h1 className="header">Miyako</h1>
    
            <nav>

                <ul className="nav">
                    {sections.map((section) => (
                        <li key={section} className={currentPage === section ? 'active' : ''}>
            <a href={`#${section}`} onClick={() => setCurrentPage(section)} style={{ fontWeight: currentPage === section ? 'bold' : 'normal' }}>
                {section}
            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        );
    };

    export default Header;