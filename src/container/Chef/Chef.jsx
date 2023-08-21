import React from 'react'

import './Chef.css'
import { images } from '../../constants';
import  SubHeading from '../../components/SubHeading/SubHeading';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper__img">
        <img src={images.chef} alt="chef`" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title = " Chef's word "/>
        <h1 className='headtext__cormorant'>what We Believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, exercitationem.</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius itaque sint voluptate qui facilis consequatur quod porro delectus consectetur.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'> Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Chef