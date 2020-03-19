import React from 'react';

const SelectFilter = ({containerClass, title, options, onChange}) => {
    return (
        <div className={containerClass}>
            <h4>{title}</h4>
            <select className="clickable" onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => <option>{option}</option>)}
            </select>
        </div>
    );
};

export default SelectFilter;