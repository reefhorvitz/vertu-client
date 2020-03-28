import React from 'react';
import BathImage from '../../../static/images/w-bath.png';
import BedImage from '../../../static/images/w-bed.png';
import AreaImage from '../../../static/images/w-area.png';
import ClockImage from '../../../static/images/clock.png';
import DateImage from '../../../static/images/date.png';
import ArrowImage from '../../../static/images/right-arrow.png';
import DefaultApartmentImage from '../../../static/images/model-sm.jpg';

const ScheduleApartmentData = ({images, location, bedroomNum, bathroomNum, size, Description, closeModal}) => {
    const apartmentImage = (images && images.get(0)) || DefaultApartmentImage;
    return (
        <div className="event-info">
            <div className="sm-model-img">
                <div className="sm-window-img">
                    <div className="apartment-details">
                        <div className="window-img">
                            <img src={apartmentImage} className="img-responsive"/>
                            <div className="row row-top"><span className="apprtment-name">{location}</span>
                            </div>
                            <div className="row row-bottom"><span className="bed-type"><img
                                src={BedImage} alt="bed-image"/> {bedroomNum} Bedrooms</span><span
                                className="bath-type"><img src={BathImage} alt="bath-image"/> {bathroomNum} Bath</span><span
                                className="area-type"><img src={AreaImage } alt="area-image"/> {size} sq ft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reschedule-tour-info">
                <h4>Reschedule a Live Tour</h4>
                <span className="sch-time"><p><img src={ClockImage} alt="clock"/> 30 min</p></span>
                <span className="sch-date"><p><img src={DateImage} alt="date"/>Web conferencing details provided upon confirmation</p></span>
                <div className="re-tour-info">
                    <p>{Description}</p>
                </div>
                <a href="/" className="confirm-next"><img src={ArrowImage} alt="right-arrow"/></a>
            </div>
            <a onClick={closeModal} className="close"><i className="fa fa-close" aria-hidden="true"></i></a>
        </div>

    );
};

export default ScheduleApartmentData;