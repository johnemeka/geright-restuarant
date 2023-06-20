import React from 'react' ;
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md' ;

import images from '../../constants/images';
import { useState } from 'react';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className='p__opensans'><a href='#Home'>Home</a></li>
        <li className='p__opensans'><a href='#About'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#Awards'>Awards</a></li>
        <li className='p__opensans'><a href='#Contents'>Contents</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log in / Register</a>
        <div/>
        <a href="/" className='p__opensans'> Book Table</a>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontsize={30} onClick={() => setToggleMenu (true) } />
        {toggleMenu && (
        
        <div className="app__navbar-smallscreen-overly flex__center slide-botton">
          <MdOutlineRestaurantMenu fontsize={27} className="overly_close" onClick={() => setToggleMenu (false)} />
          
          <ul className='app_navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#Home'>Home</a></li>
            <li className='p__opensans'><a href='#About'>About</a></li>
            <li className='p__opensans'><a href='#Menu'>Menu</a></li>
            <li className='p__opensans'><a href='#Awards'>Awards</a></li>
            <li className='p__opensans'><a href='#Contents'>Contents</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar