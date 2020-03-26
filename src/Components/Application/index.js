import React, {useState} from 'react';
import Steps from "./Steps";
import Questions from "./Questions";
import HouseImage from '../../static/images/app-img.png';


const steps = ["Accompany", "Reason", "Habit", "Location"];
const questions = [{question:"Who are you moving with?", answers:["Bae", "Reef", "Shmul", "House"]},
    {question:"Why are you moving?", answers:["Internship", "Reef", "Job", "House"]},
    {question:"Who are you moving with?", answers:["Bae", "Reef", "Shmul", "House"]},
    {question:"Why are you moving?", answers:["Internship", "Reef", "Job", "House"]}
];

const Application = ({steps, questions}) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div className="application-area">
            <div className="app-area">
                <div className="card">
                    <div className="card-body mb-4">
                        <Steps setActiveStep={setActiveStep} activeStep={activeStep} steps={steps}/>
                        <Questions setActiveStep={setActiveStep} activeStep={activeStep} questions={questions}/>
                    </div>
                    <div className="app-img">
                        <img src={HouseImage} className="img-responsive"/>
                        <a className="list-close" href="/"><i className="fa fa-close" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Application.defaultProps = {steps, questions};

export default Application;