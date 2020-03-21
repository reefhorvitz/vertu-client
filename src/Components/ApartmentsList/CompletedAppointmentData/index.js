import React from 'react';

const CompletedAppointmentData = ({name, email, phone, image}) => {
    return (
        <div className="tours-appointment-rgt">
            <span className="change-appointment"><a href="#">Delete</a></span>
            <div className="live-tours-appointment">
                <div className="agent-detail">
                    <h3>Your virtual Tour <span>completed</span></h3>

                    <div className="agent-detail-info">
                        <h5>Contact Agent</h5>
                        <span className="agent-img"><img src={image} className="img-responsive"/></span>
                        <div className="agent-info">
                            <h4>{name}</h4>
                            <span className="agent-info"><span>Phone</span>{phone}</span>
                            <span className="agent-email"><span>Email</span>{email}</span>
                        </div>
                    </div>
                </div>

                <div className="footer-info">
                    <p>Share Your information with your Agent</p><a href="#">Share Info</a>
                </div>
            </div>
        </div>
);
}

export default CompletedAppointmentData;