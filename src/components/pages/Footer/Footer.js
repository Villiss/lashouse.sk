import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to={'//www.lindab.com/sk/pro/pages/default.aspx?redirecttoproorhome=true&i=2685/'} className='social-logo' target='_blank'>
            <img src='/images/logo_lindab.png' alt='Lindab'/>
            </Link>
          </div>
          <small className='website-rights'>LASHOUSE © {new Date().getFullYear()}</small>
          <div className='footer-logo'>
            <Link className='social-logo' to={'//www.apex-arch.sk/'} target='_blank'>
              <img src='/images/logo_apex.png' alt='Apex'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;