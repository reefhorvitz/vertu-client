import React from 'react';
import PropertyLocation from "../../Containers/PropertyMangerComponents/PropertyLocation";
import PropertySpecifics from "../../Containers/PropertyMangerComponents/PropertySpecifics";
import PropertyFacts from "../../Containers/PropertyMangerComponents/PropertyFacts";
import PropertyBuildingDetails from "../../Containers/PropertyMangerComponents/PropertyBuildingDetails";
import PropertyImageAdder from "../../Containers/PropertyMangerComponents/PropertyImageAdder";

const AddProperty = ({addProperty}) => {
    return (
        <div className="container">
            <div className="new-listing-section">
                <h1>New Listing</h1>
                <div className="new-listing-Form-section">
                    <div>
                        <PropertyLocation/>
                        <PropertySpecifics/>
                    </div>
                    <PropertyImageAdder/>
                    <PropertyFacts/>
                    <PropertyBuildingDetails/>
                    <button onClick={addProperty}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;