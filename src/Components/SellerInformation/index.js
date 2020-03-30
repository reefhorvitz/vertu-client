import React from 'react';
import {handleByUserType} from "../../helpers/userType";

const SellerInformation = ({name, email, phone, image, openModal, shouldShowScheduleButton=true}) => {
    return (
        <div className="live-tour-sm">
            <span className="cs-img"><img src={image} alt="tour-img" className="img-responsive"/></span>
            <h3>{name}</h3>
            <span className="cs-contact"><h6>Phone</h6><p>{phone}</p></span>
            <span className="cs-contact"><h6>Email</h6><p>{email}</p></span>
            {shouldShowScheduleButton && handleByUserType(<a onClick={openModal}>Schedule a Live Tour</a>, null)}
        </div>
    );
}

export default SellerInformation;