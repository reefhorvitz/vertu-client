import React from 'react';
import MapImage from '../../../static/images/map.png';
import ImageSlide from "../../ImageSlide/ImageSlide";

const PropertySlideshow = ({images}) => {
    return (
        <section>
            <div className="location-slider hide-slid-sm">
                <div className="apartment">
                    <div id="container" className="cf">
                        <div id="main" role="main">
                           <ImageSlide images={images}/>
                        </div>
                    </div>
                </div>
                <div className="map-sm"><img src={MapImage} className="img-responsive"/></div>
            </div>
        </section>
);
};

export default PropertySlideshow;