import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import DefaultHouseImage  from '../../static/images/appartment.jpg';

const ImageSlide = ({images = [], ImageTag, imageLIClass}) => {
    if(images.size === 0){
        images = [DefaultHouseImage];
    }
    return (
        <section className="slider">
            <div className="flexslider">
                <ul className="slides">
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    {images.map((image, index) => (
                    <li className={imageLIClass}  key={index}>
                        <img src={image}/>
                    </li>
                    ))}
                    </Carousel>
                </ul>
            </div>
            <span className="list-tag">{ImageTag}</span>
        </section>
    );
}

export default ImageSlide;