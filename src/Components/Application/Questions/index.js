import React from 'react';

const Questions = ({questions, activeStep, onAnswerClick}) => {
    return (
        <form role="form" action="" method="post">
            {questions.map((question, index) => activeStep === index && (
                <div key={index} className="row setup-content" id={`step-${index}`}>
                    <div className="col-md-12">
                        <div className="form-group md-form">
                            <h3>{question.question}</h3>
                            {question.answers.map((answer, answerIndex) => (
                                <button key={answerIndex} className="btn btn-indigo btn-rounded nextBtn float-right waves-effect waves-light"
                                        type="button"
                                        onClick={() => onAnswerClick(answer)}>
                                    {answer}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </form>
    );
};

export default Questions;