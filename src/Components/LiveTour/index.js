import React from 'react';
import BackButton from "../BackButton";
import Video from "../../Containers/Video";

const LiveTour = () => {
    return (
        <div className="container list-detail liv-tour-sm">
            <BackButton/>
            <div className="live-tour">
                <h2>Live Tour</h2>
                <div className="tour-video">
                    <Video/>
                </div>
            </div>
        </div>
    );
}

export default LiveTour;