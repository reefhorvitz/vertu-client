import React from 'react';
import MapImage from '../../../static/images/map.png';
import LeftArrow from '../../../static/images/left-arrow.png';
import RightArrow from '../../../static/images/right-arrow.png';

const PropertySlideshow = ({images}) => {
    return (
        <section>
            <div className="location-slider hide-slid-sm">
                <div className="apartment">
                    <div id="container" className="cf">
                        <div id="main" role="main">
                            <section className="slider">
                                <div className="flexslider">
                                    <ul className="slides">
                                        {images.map(image => <li><img src={image}/></li>)}
                                    </ul>
                                    <div className="custom-navigation">
                                        <a href="#" className="flex-prev"><img src={LeftArrow} alt="left-arrow"/></a>
                                        <a href="#" className="flex-next"><img src={RightArrow} alt="right-arrow"/></a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="map-sm"><img src={MapImage} className="img-responsive"/></div>
            </div>
        </section>
);
};

export default PropertySlideshow;