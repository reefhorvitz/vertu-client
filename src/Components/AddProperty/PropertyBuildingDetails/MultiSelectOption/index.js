import React, {useState} from 'react';

const MultiSelectOption = ({title, options, containerClass = "Facilities-data", addFunc, deleteFunc}) => {
    const [isOpen, setIsOpen] = useState(false);

    if(options.toJS){
        options = options.toJS();
    }
    const onClick = (e, option) => {
        if(e.target.checked){
            addFunc(option.id)
        }
        else {
            deleteFunc(option.id)
        }
    };

    return (
        <div className="building-details-section">
            <h3 onClick={() =>setIsOpen(!isOpen)}>{title}<span>+</span></h3>
            <div className="Facilities-data-box-bg">
                <div className="Facilities-data-box" style={{display: isOpen ? 'unset' : 'none'}}>
                    {options.map(option => (
                    <div className={containerClass}>
                        <label className="label-text">
                            {option.name}
                            <input type="checkbox" onChange={(e) => onClick(e, option)}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MultiSelectOption;