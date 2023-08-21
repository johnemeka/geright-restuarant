import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

import  SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if(scrollRef.current){
      scrollRef.current.scrollLeft -=300;
    }
  };

  const scrollRight = () => {
    if(scrollRef.current){
      scrollRef.current.scrollLeft +=300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a. </p>
        <button type='button' className='custom__button'>view more</button>
      </div>

      <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {galleryImages.map(( image, index) => (
              <div className="app__gallery-images_card flex__center">
                <img src={image} alt="gallery" />
                <BsInstagram className= "gallery__images-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrow">
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={scrollLeft}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={scrollRight}/>
          </div>
        </div>
    </div>
  )
}

export default Gallery