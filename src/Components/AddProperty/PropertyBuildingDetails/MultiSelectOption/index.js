import React from 'react';
import styles from './styles.module.css';

const MultiSelectOption = ({options, containerClass, addFunc, deleteFunc}) => {
    const onClick = (e, option) => {
        if(e.target.checked){
            addFunc(option.id)
        }
        else {
            deleteFunc(option.id)
        }
    };

    return (
        options.map(option => (
            <div className={containerClass}>
                <label className="label-text">
                    {option.name}
                    <input type="checkbox" onChange={(e) => onClick(e, option)}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        ))
    );
}

export default MultiSelectOption;