import React from 'react';

const Steps = ({steps}) => {
    return (
        <div className="steps-form">
            <div className="steps-row setup-panel">
                {steps.map((step, index) => (
                <div className="steps-step">
                    <a href={`#step-${index}`} type="button"
                       className="btn btn-circle waves-effect waves-light btn-default btn-indigo">{index+1}</a>
                    <p>{step}</p>
                </div>))}
            </div>
        </div>

    );
}

export default Steps;