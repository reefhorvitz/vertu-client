import React, {useEffect} from 'react';
import {OTPublisher, OTSession, OTStreams, OTSubscriber} from 'opentok-react';

const Video = ({onLoad, apiKey, sessionId, token, isAgent}) => {
    useEffect(() => {
        onLoad()
    }, []);
    return (
        apiKey &&
        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
            <OTPublisher properties={{publishVideo: true}}/>
            <OTStreams>
                <OTSubscriber />
            </OTStreams>
        </OTSession>
    );
};

export default Video;