import React from 'react';
import styles from './styles.module.css';
import RentalFacts from "../PropertyFeatures";
import BuildingDetails from "../BuildingDetails/BuildingDetails";

const Description = ({propertyId, description}) => {
    return (<div className="container detail-pr-description">
        <div className="detail-description">
            <h3>Description</h3>
            <p>{description}</p>
            <RentalFacts/>
            <BuildingDetails/>
        </div>
    </div>)
};

export default Description;