import React, {useEffect, useState} from 'react';
import Description from "../../Containers/PropertyDetails/PropertyDescription";
import RentalSummery from "../../Containers/RentalSummery";
import SellerInformation from "../../Containers/SellerInformation";
import PropertySlideshow from "./PropertySlideshow";
import BackButton from "../BackButton";
import AppointmentSchedule from "../../Containers/AppointmentSchedule";

const PropertyDetails = ({propertyId, loadApartmentData,
                             shouldShowScheduleButton}) => {
    const [isAppointmentScheduleOpen, setIsAppointmentScheduleOpen] = useState(false);
    const closeModal = () => setIsAppointmentScheduleOpen(false);
    const openModal = () => setIsAppointmentScheduleOpen(true);
    useEffect(() => {
        loadApartmentData();
    },[]);

    return (<React.Fragment>
        <div className="container list-detail">
        <BackButton/>
            {isAppointmentScheduleOpen ? <AppointmentSchedule closeModal={closeModal} propertyId={propertyId}/> : null}
        <RentalSummery propertyId={propertyId}/>
        </div>
        <PropertySlideshow propertyId={propertyId}/>
        <div className="container detail-pr-description">
            <Description propertyId={propertyId}/>
            <SellerInformation openModal={openModal} propertyId={propertyId} shouldShowScheduleButton={shouldShowScheduleButton}/>
        </div>
        </React.Fragment>
)};

export default PropertyDetails;