import React, {useState} from 'react';
import ImageSlide from "../../ImageSlide/ImageSlide";
import styles from './styles.module.css';

const PropertyImageAdder = ({uploadImage, images}) => {
    const [isLoading, setIsLoading] = useState(false);
    const onChange = (e) => {
        setIsLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        uploadImage(formData)
    };
    return (
        <form enctype="multipart/form-data" method="post">
        <div className={`images-section-bg ${styles.imageContainer}`}>
            <h2>Images</h2>
            <a href="#"><label className={`${isLoading && "disabled"}`} for="file-upload">ADD MORE IMAGES</label>
            <input type="file" id="file-upload" style={{display: "none"}} onChange={onChange}/>
            <i className="fa fa-plus" aria-hidden="true"/></a>
            {images.size > 0 ? <ImageSlide imageLIClass={'new-listing-image-li'} images={images}/> : null}
        </div>
        </form>
    );
}

export default PropertyImageAdder;