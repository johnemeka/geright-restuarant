import React from 'react'
import './AboutUs.css'

import { images } from '../../constants'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overly flex__center">
        <img src={images.G} alt=" G letter" />
      </div>

      <div className="app__aboutus-content flex_center app__wrapper">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant"> About Us</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Doloribus magnam asperiores enim nam. Commodi aliquid pariatur quis cumque eligendi?
           Fugiat eaque ullam ratione corporis facilis culpa. Accusantium commodi architecto consequuntur.</p>
           <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant"> Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Doloribus magnam asperiores enim nam. Commodi aliquid pariatur quis cumque eligendi? 
           Fugiat eaque ullam ratione corporis facilis culpa. Accusantium commodi architecto consequuntur.</p>
           <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs