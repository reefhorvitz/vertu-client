import React from 'react';
import ImageSlide from "../../../Containers/ImageSlide";
import ApartmentDetails from "../../../Containers/ApartmentDetails";
import {useHistory} from "react-router-dom";

const ListApartment = ({propertyId, AppointmentModal}) => {
    const history = useHistory();
    const redirectToProperty = () => {
        history.push(`/properties/${propertyId}`);
    };

    return (
        <div className="apartment clickable" onClick={redirectToProperty}>
            <div id="main" role="main" className="slider-md">
                <ImageSlide propertyId={propertyId} ImageTag={"Apartment"}/>
                <ApartmentDetails propertyId={propertyId}/>
                {AppointmentModal ? <AppointmentModal propertyId={propertyId}/> : ''}
                </div>
            </div>
        );
    };

    export default ListApartment;