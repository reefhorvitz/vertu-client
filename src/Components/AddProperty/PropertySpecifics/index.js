import React from 'react';
import SelectFilter from "../../SelectFilter";
import {bathroomOptions, bedroomOptions} from "../../Discover/DiscoverFilters";

const PropertySpecifics = ({onBedroomChange, onBathroomChange,
                           size, onSizeChange,
                           price, onPriceChange}) => {
    return (
        <div className="new-listing-form-bg">
            <h2>Specifics</h2>
            <SelectFilter containerClass={"form-field-bedroom"} options={bedroomOptions} onChange={onBedroomChange} title={'Bedroom (s)'} useLabelTitle={true}/>
            <SelectFilter containerClass={"form-field-Bathroom"} options={bathroomOptions} onChange={onBathroomChange} title={'Bathroom (s)'} useLabelTitle={true}/>
            <div className="form-field-size">
                <label>Size (sqft)</label>
                <input type="number" placeholder="1000" value={size} onChange={e => onSizeChange(e.target.value)}
                       className="type-input"/>
            </div>
            <div className="form-field-price">
                <label>Price ($/mo)</label>
                <input type="number" placeholder="2000" value={price}
                       onChange={e => onPriceChange(e.target.value)} className="type-input"/>
            </div>
        </div>
    );
}

export default PropertySpecifics;