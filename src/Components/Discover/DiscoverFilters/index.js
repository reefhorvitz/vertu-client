import React from 'react';
import SelectFilter from "../../SelectFilter";
import PriceFilter from "../../PriceFilter";
import styles from './styles.module.css';

export const bedroomOptions = [
    {id: 0, name: "Studio"},
    {id: 1, name: "1"},
    {id:2, name:"2"},
    {id: 3, name:"3"},
    {id: 4, name: "4+"}
];

export const bathroomOptions = [
    {id:1, name: "1 or more"},
    {id: 1.5, name: "1.5 or more"},
    {id: 2, name: "2 or more"},
    {id: 2.5, name: "2.5 or more"},
    {id: 3, name: "3 or more"},
    {id: 3.5, name: "3.5 or more"},
    {id: 4, name: "4 or more"}
];

const DiscoverFilters = ({onPriceChange, onBedroomNumberChange, onBathroomNumberChange, onCityChange, cities = [],
                         cityFilterTitle="City", children,
                         selectedCity, selectedBedroomNumber, selectedBathroomNumber,
                         min, max}) => {
    if(cities.toJS){
        cities = cities.toJS();
    }
    return (
        <div className="container location-filter">
            <div className={`container ${styles.container}`}>
            <SelectFilter defaultValue={selectedCity} onChange={onCityChange} options={cities} title={cityFilterTitle}/>
            <SelectFilter defaultValue={selectedBedroomNumber} onChange={onBedroomNumberChange} title={"Beds"}
                          options={bedroomOptions}/>
            <SelectFilter defaultValue={selectedBathroomNumber} onChange={onBathroomNumberChange} title={"Bath"}
                          options={bathroomOptions}/>
            <PriceFilter onChange={onPriceChange} defaultMin={min} defaultMax={max}/>
                {children}
            </div>
        </div>
    );
}

export default DiscoverFilters;