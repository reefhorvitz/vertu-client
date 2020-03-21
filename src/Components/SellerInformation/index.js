import React from 'react';

const SellerInformation = ({name, email, phone, image} ) => {
    return (
        <div className="live-tour-sm">
            <span className="cs-img"><img src={image} alt="tour-img" className="img-responsive"/></span>
            <h3>{name}</h3>
            <span className="cs-contact"><h6>Phone</h6><p>{phone}</p></span>
            <span className="cs-contact"><h6>Email</h6><p>{email}</p></span>
            <a href="#">Schedule a Live Tour</a>
        </div>
    );
}

export default SellerInformation;