import React from 'react';
import '../styles/style.css';

const styles = {
    navbarLogo: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: '28px',
    },

    navbarBackground: {
      backgroundColor: 'black'
    },

    navbarText: {
      marginLeft: '25px',
      color: 'white',
    },

    navbarLocation: {
      backgroundColor: 'black',
      border: 'none',
      marginTop: '6px'
    },

    navbarLocationMobile: {
      backgroundColor: 'black',
      border: 'none',
      marginTop: '6px',
      borderBottom: '1px solid white'
    },
  };


  function Nav({ currentPage, handlePageChange }) {
    if (window.innerWidth >= 880)
    return (

      <ul className="nav nav-tabs"style={styles.navbarBackground}>
        <div style={styles.navbarText}>
        <a className="navbar-brand" style={styles.navbarLogo} href="/" >J.D. Rein </a>
        </div>
          
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>

        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#Experience"
            onClick={() => handlePageChange('Experience')}
            className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}
          >
            Experience
          </a>
        </li>
    
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Connect
          </a>
        </li>

      </ul>
    );

    if (window.innerWidth <= 879)
    return (
    <div>
      <div style={styles.navbarLogo}>
      <a className="nav" style={styles.navbarText} href="/" >J.D. Rein</a>
      </div>
    
        
      <ul className="nav nav-tabs"style={styles.navbarBackground}>
        
        <li className="nav-item">
          <a style={styles.navbarLocationMobile}
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.navbarLocationMobile}
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>

        <li className="nav-item">
          <a style={styles.navbarLocationMobile}
            href="#Experience"
            onClick={() => handlePageChange('Experience')}
            className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'}
          >
            Experience
          </a>
        </li>
    
        <li className="nav-item">
          <a style={styles.navbarLocationMobile}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Connect
          </a>
        </li>

      </ul>
      </div>
    );
  }


export default Nav;