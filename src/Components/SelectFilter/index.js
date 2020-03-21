import React from 'react';

const SelectFilter = ({containerClass, title, options, onChange, idSelect=true}) => {
    const onSelect = (e) => {
      if(idSelect){
          onChange(options[e.target.selectedIndex-1].id);
      }
      else {
          onChange(e.target.value);
      }
    };
    return (
        <div className={containerClass}>
            <h4>{title}</h4>
            <select className="clickables" onChange={onSelect}>
                <option disabled selected value></option>
                {options.map((option, index) => <option>{idSelect ? option.name : option}</option>)}
            </select>
        </div>
    );
};

export default SelectFilter;