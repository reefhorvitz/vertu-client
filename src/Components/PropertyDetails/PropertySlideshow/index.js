import React from 'react';
import MapImage from '../../../static/images/map.png';
import ImageSlide from "../../../Containers/ImageSlide";
import styles from './styles.module.css';

const PropertySlideshow = ({propertyId}) => {
    return (
        <section>
            <div className={`location-slider hide-slid-sm ${styles.container}`}>
                <div className="apartment">
                    <div id="container" className="cf">
                        <div id="main" role="main">
                           <ImageSlide propertyId={propertyId}/>
                        </div>
                    </div>
                </div>
                <div className={`map-sm ${styles.mapContainer}`}><img src={MapImage} className="img-responsive"/></div>
            </div>
        </section>
);
};

export default PropertySlideshow;