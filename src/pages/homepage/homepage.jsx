import React from 'react';
import SimpleSlider from '../../components/bannerCarousel/bannerCarousel';
import Banners from '../../components/banners/banners';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1>Homepage</h1>
            <SimpleSlider />
            <Banners />
        </div>
    )
}

export default Homepage;
