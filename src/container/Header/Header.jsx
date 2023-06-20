import React from 'react';


import {images}  from '../../constants'
import './Header.css'
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding'>
      <div className="app__wrapper_info">
        <SubHeading className='subheading' title="Chase The New Flavour"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Aspernatur ducimus quis eius. Ex, reiciendis! <br /> Quas distinctio iste consequatur vel quos!</p>
          <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />

      </div>

    </div>

  )
}

export default Header