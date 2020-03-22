import React from 'react';
import PropertyLocation from "../../Containers/PropertyMangerComponents/PropertyLocation";
import PropertySpecifics from "../../Containers/PropertyMangerComponents/PropertySpecifics";
// import PropertyImageAdder from "./PropertyImageAdder";
// import PropertyFacts from "./PropertyFacts";
// import PropertyBuildingDetails from "./PropertyBuildingDetails";

const AddProperty = ({}) => {
    return (
        <div className="container">
            <div className="new-listing-section">
                <h1>New Listing</h1>
                <div className="new-listing-Form-section">
                <PropertyLocation/>
                <PropertySpecifics/>
                {/*<PropertyImageAdder/>*/}
                {/*<PropertyFacts/>*/}
                {/*<PropertyBuildingDetails/>*/}
                </div>
            </div>
        </div>

    );
};

export default AddProperty;