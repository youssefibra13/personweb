import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoweb.png';

const NavBar = () => {

    const darkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }

    const lightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    }
    const Menu = useRef();

    const menuHandler = () => {
        Menu.current.classList.toggle('active');
    }

    darkMode();

    const ThemeHandler = () => {
        if (document.querySelector('body').getAttribute('data-theme') === 'dark') {
            lightMode();
        }
        else {
            darkMode();
        }
    }

    return (
        <nav>
            <div className='navbar_container'>
                <div className='navbar-title'>
                    <Link to="/"><img src={Logo} alt="Navbar Logo" /></Link>
                </div>

                <ul ref={Menu}>
                    <li><Link to="/"> <i className='ri-home-3-line'></i>Home </Link> </li>
                    <li><Link to="/about"> <i className='ri-user-line'></i>About </Link> </li>
                    <li><Link to="/projects"> <i className='ri-id-card-line'></i>Projects </Link> </li>
                    <li><Link to="/interests"> <i className='ri-footprint-line'></i>Interests </Link> </li>
                    <li><Link to="/contact"> <i className='ri-chat-new-line'></i>Contact </Link> </li>
                </ul>

                <div className='navbar-toggle'>
                    <i className='ri-moon-line' onClick={ThemeHandler}></i>
                    <i className='ri-menu-3-line' onClick={menuHandler}></i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
