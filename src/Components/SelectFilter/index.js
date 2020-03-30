import React from 'react';

const SelectFilter = ({containerClass, title, options, onChange, idSelect=true, useLabelTitle=false, selectClass,
                          defaultValue}) => {
    if(options.toJS){
        options = options.toJS();
    }
    const onSelect = (e) => {
      if(idSelect){
          onChange(options[e.target.selectedIndex-1].id);
      }
      else {
          onChange(e.target.value);
      }
    };
    const addedProps = {};
    const selectedOption = options.findIndex(option => option.id === defaultValue);
    if(selectedOption !== -1){
        addedProps.value = selectedOption
    }
    return (
        <div className={containerClass}>
            {useLabelTitle ? <label>{title}</label> : <h4>{title}</h4>}
            <select className={`${selectClass} clickable`} onChange={onSelect} {...addedProps}>
                <option disabled selected value={-1}></option>
                {options.map((option, index) => <option value={index}>{idSelect ? option.name : option}</option>)}
            </select>
        </div>
    );
};

export default SelectFilter;