import React from 'react';
import Steps from "./Steps";
import Questions from "./Questions";
import HouseImage from '../../static/images/app-img.png';
const Application = ({steps, questions}) => {
    return (
        <div className="application-area">
            <div className="app-area">
                <div className="card">
                    <div className="card-body mb-4">
                        <Steps steps={steps}/>
                        <Questions questions={questions}/>
                    </div>
                    <div className="app-img">
                        <img src={HouseImage} className="img-responsive"/>
                        <span className="list-close"><i className="fa fa-close" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
                        );
}

export default Application;