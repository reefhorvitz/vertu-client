import React from 'react';

const Steps = ({steps, activeStep, setActiveStep}) => {
    return (
        <div className="steps-form">
            <div className="steps-row setup-panel">
                {steps.map((step, index) => (
                <div className="steps-step">
                    <a type="button" onClick={() => setActiveStep(index)}
                       className={`btn btn-circle waves-effect waves-light btn-default ${activeStep === index && "btn-indigo"}`}>
                        {index+1}
                    </a>
                    <p>{step}</p>
                </div>))}
            </div>
        </div>

    );
}

export default Steps;