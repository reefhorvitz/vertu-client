import React from 'react';
import SelectFilter from "../../SelectFilter";

const selectContainerClassName = "facts-and-features-form-field";

const PropertyFacts = ({typeOptions, onTypeChange,
                       heatingOptions, onHeatingChange,
                       coolingOptions, onCoolingChange,
                       parkingOptions, onParkingChange,
                       yearBuilt, onYearBuiltChange}) => {
    return (
        <div className="facts-and-features-section-bg">
            <h2>Facts and Features</h2>
            <SelectFilter containerClass={selectContainerClassName}
                          title="Type"
                          options={typeOptions}
                          onChange={onTypeChange}/>

            <SelectFilter containerClass={selectContainerClassName}
                          title="Heating"
                          options={heatingOptions}
                          onChange={onHeatingChange}/>

            <SelectFilter containerClass={selectContainerClassName}
                          title="Cooling"
                          options={coolingOptions}
                          onChange={onCoolingChange}/>

            <SelectFilter containerClass={selectContainerClassName}
                          title="Parking"
                          options={parkingOptions}
                          onChange={onParkingChange}/>


            <div className="facts-and-features-form-field">
                <label>Year Built</label>
                <input type="text" placeholder="1990" value={yearBuilt}
                       onChange={(e) => onYearBuiltChange(e.target.value)} className="type-input"/>
            </div>
        </div>
    );
}

export default PropertyFacts;