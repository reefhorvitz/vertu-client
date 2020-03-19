import React from 'react';
import BackImage from "../../static/images/back.png";
import {useHistory} from "react-router-dom";

const BackButton = () => {
    const history = useHistory();
    const redirectBack = () => {
      history.goBack();
    };
    return (
        <row>
            <div className="container pre-page">
                <a onClick={redirectBack}><img src={BackImage}/>Back</a>
            </div>
        </row>
    );
}

export default BackButton;