import React from 'react';

const SelectFilter = ({containerClass, title, options}) => {
    return (
        <div className={containerClass}>
            <h4>{title}</h4>
            <select>
                {options.map((option, index) => <option>{option}</option>)}
            </select>
        </div>
    );
};

export default SelectFilter;