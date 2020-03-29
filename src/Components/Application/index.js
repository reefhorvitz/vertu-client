import React, {useState} from 'react';
import Steps from "./Steps";
import Questions from "./Questions";
import HouseImage from '../../static/images/app-img.png';
import {fromJS} from "immutable";


const steps = ["Accompany", "Reason", "Habit", "Location"];
const questions = [{question:"Who are you moving with?", answers:["Bae", "Myself", "None", "House"]},
    {question:"Why are you moving?", answers:["Internship", "None", "Job", "House"]},
    {question:"Who are you moving with?", answers:["Bae", "Pop", "Roy", "House"]},
    {question:"Why are you moving?", answers:["Internship", "None", "Job", "House"]}
];

const mapAnswersToTags = (answers) => {

};

const Application = ({steps, questions, setTags}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState(fromJS([]));

    const onAnswerClick = (answer) => {
        setAnswers(answers.set(activeStep, answer));
        setActiveStep(activeStep+1);
        if (activeStep>=answer.length){
            setTags(mapAnswersToTags);
        }
    };

    return (
        <div className="application-area">
            <div className="app-area">
                <div className="card">
                    <div className="card-body mb-4">
                        <Steps setActiveStep={setActiveStep} activeStep={activeStep} steps={steps}/>
                        <Questions onAnswerClick={onAnswerClick} activeStep={activeStep} questions={questions}/>
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