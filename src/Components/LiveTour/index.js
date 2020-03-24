import React from 'react';
import BackButton from "../BackButton";
import Video from "../../Containers/Video";
import PropertyDetails from "../../Containers/PropertyDetails";

const LiveTour = ({propertyId=-1, appointmentId}) => {
    return (
        <React.Fragment>
        <div className="container list-detail liv-tour-sm">
            <BackButton/>
            <div className="live-tour">
                <h2>Live Tour</h2>
                <div className="tour-video">
                    <Video appointmentId={appointmentId}/>
                </div>
            </div>
        </div>
        <PropertyDetails propertyId={propertyId}/>
        </React.Fragment>
    );
}

export default LiveTour;