import React from 'react';
import SelectFilter from "../../SelectFilter";

const PropertyLocation = ({cities = [], onCityChange,
                            addressOne, onAddressOneChange,
                            addressTwo, onAddressTwoChange,
                            countries= [], onCountryChange,
                            zipCode, onZipCodeChange
                          }) => {
    if(cities.toJS){
        cities = cities.toJS();
    }
    if(countries.toJS){
        countries = countries.toJS();
    }
    return (
        <div className="new-listing-form-bg">
            <h2>Property Location</h2>
            <div className="form-field-address">
                <label>Address 1</label>
                <input type="text" placeholder="Enter your property address here" className="type-input"
                       value={addressOne} onChange={e => onAddressOneChange(e.target.value)}/>
            </div>
            <div className="form-field-address">
                <label>Address 2</label>
                <input type="text" placeholder="Suite,Apartment #, ect" className="type-input"
                       value={addressTwo} onChange={e => onAddressTwoChange(e.target.value)}/>
            </div>
            <SelectFilter options={cities} onChange={onCityChange} title={'City'}
                          containerClass={'form-field-city'} useLabelTitle={true}/>
            <SelectFilter options={countries} onChange={onCountryChange} title={'State'}
                          containerClass={"form-field-state"} useLabelTitle={true}/>
            <div className="form-field-zip">
                <label>Zip Code</label>
                <input type="number" placeholder="5 Digit" className="type-input" maxLength="5"
                value={zipCode} onChange={e => onZipCodeChange(e.target.value)}/>
            </div>
        </div>
    );
};

export default PropertyLocation;