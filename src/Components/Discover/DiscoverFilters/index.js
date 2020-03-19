import React from 'react';
import SelectFilter from "../../SelectFilter";
import PriceFilter from "../../PriceFilter";
import styles from './styles.module.css';

const DiscoverFilters = () => {
    return (
        <div className="container location-filter">
            <div className={`container ${styles.container}`}>
            <SelectFilter title={"Beds"} options={["Studio", "1", "2", "3", "4+"]}/>
            <SelectFilter title={"Bath"} options={["1 or more", "1.5 or more", "2 or more", "2.5 or more",
                "3 or more", "3.5 or more", "4 or more"]}/>
            <PriceFilter/>
            </div>
        </div>
    );
}

export default DiscoverFilters;