import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SimpleSlider = () => {

  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/banners')
      .then(response => response.json())
      .then(data => {
        setBannerData(data.banners);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Carousel fade prevLabel='PREV' className='container' nextLabel='NEXT'>
      {
        bannerData.map((item, index) => {
          return <Carousel.Item key= {index} ><LazyLoadImage preload src={`https://stellar-meerkat-0939c0.netlify.app${item.bannerImageUrl}`} alt={item.bannerImageAlt} /></Carousel.Item>
        })
      }
    </Carousel>
  );
}

export default SimpleSlider;