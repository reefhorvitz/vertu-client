import React from 'react';
import ImageSlide from "../../../Containers/ImageSlide";
import ApartmentDetails from "../../../Containers/ApartmentDetails";
import {useHistory} from "react-router-dom";
import '../../../static/css/style.css'
const ListApartment = ({propertyId, AppointmentModal}) => {
    const history = useHistory();
    const redirectToProperty = () => {
        history.push(`/properties/${propertyId}`);
    };

    return (
        <div className="apartment">
            <div id="main" role="main" className="slider-md">
                <ImageSlide propertyId={propertyId} ImageTag={"Apartment"}/>
                <ApartmentDetails onContainerClick={redirectToProperty} propertyId={propertyId}/>
                {AppointmentModal ? <AppointmentModal propertyId={propertyId}/> : ''}
                </div>
            </div>
        );
    };

    export default ListApartment;