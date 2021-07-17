import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton ()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{ color: '#ff6600' }}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src='/images/logo_lashouse.png' alt='Logo'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                O nás
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/technologia' className="nav-links" onClick={closeMobileMenu}>
                                Technológia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dizajn' className="nav-links" onClick={closeMobileMenu}>
                                Dizajn
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/galeria' className="nav-links" onClick={closeMobileMenu}>
                                Galéria
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/kontakt' className="btn-link" >
                                    <Button buttonStyle='btn--outline'>KONTAKT</Button>
                                </Link>
                            ): (
                                <Link to='/kontakt' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>KONTAKT</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
