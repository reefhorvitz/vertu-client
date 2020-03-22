import React from 'react';

const PropertyLocation = ({}) => {
    return (
        <div className="new-listing-form-bg">
            <h2>Property Location</h2>
            <div className="form-field-address">
                <label>Address 1</label>
                <input name="" type="text" placeholder="Enter your property address here" className="type-input"/>
            </div>
            <div className="form-field-address">
                <label>Address 2</label>
                <input name="" type="text" placeholder="Suite,Apartment #, ect" className="type-input"/>
            </div>
            <div className="form-field-city">
                <label>City</label>
                <input name="" type="text" placeholder="City" className="type-input"/>
            </div>
            <div className="form-field-state">
                <label>State</label>
                <select name="" className="type-select" onFocus='this.size=5;' onBlur='this.size=0;'
                        onChange='this.size=1; this.blur();'>
                <option>Lorem Ipsum</option>
                <option>Lorem Ipsum 2</option>
                <option>Lorem Ipsum 3</option>
                <option>Lorem Ipsum 4</option>
                </select>
            </div>
            <div className="form-field-zip">
                <label>Zip Code</label>
                <input name="" type="text" placeholder="5 Digit" className="type-input" maxLength="5"/>
            </div>
        </div>
    );
};

export default PropertyLocation;