import React from 'react';
import SelectFilter from "../../SelectFilter";
import PriceFilter from "../../PriceFilter";
import styles from './styles.module.css';

const bedroomOptions = [
    {id: 0, name: "Studio"},
    {id: 1, name: "1"},
    {id:2, name:"2"},
    {id: 3, name:"3"},
    {id: 4, name: "4+"}
];

const bathroomOptions = [
    {id:1, name: "1 or more"},
    {id: 1.5, name: "1.5 or more"},
    {id: 2, name: "2 or more"},
    {id: 2.5, name: "2.5 or more"},
    {id: 3, name: "3 or more"},
    {id: 3.5, name: "3.5 or more"},
    {id: 4, name: "4 or more"}
];

const DiscoverFilters = ({onPriceChange, onBedroomNumberChange, onBathroomNumberChange, onCityChange, cities = []}) => {
    if(cities.toJS){
        cities = cities.toJS();
    }
    return (
        <div className="container location-filter">
            <div className={`container ${styles.container}`}>
            <SelectFilter onChange={onCityChange} options={cities} title={'City'}/>
            <SelectFilter onChange={onBedroomNumberChange} title={"Beds"} options={bedroomOptions}/>
            <SelectFilter onChange={onBathroomNumberChange} title={"Bath"} options={bathroomOptions}/>
            <PriceFilter onChange={onPriceChange}/>
            </div>
        </div>
    );
}

export default DiscoverFilters;