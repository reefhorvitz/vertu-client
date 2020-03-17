import React from 'react';
import LeftArrow from '../../static/images/left-arrow.png';
import RightArrow from '../../static/images/right-arrow.png';
const ImageSlide = ({images, ImageTag}) => {
    return (
        <section className="slider">
            <div className="flexslider">
                <ul className="slides">
                    {images.map((image, index) => (
                    <li key={index}>
                        <img src={image}/>
                    </li>
                    ))}
                </ul>
                <div className="custom-navigation">
                    <a href="#" className="flex-prev"><img src={LeftArrow}/></a>
                    <a href="#" className="flex-next"><img src={RightArrow}/></a>
                </div>
            </div>
            <span className="list-tag">{ImageTag}</span>
        </section>
    );
}

export default ImageSlide;