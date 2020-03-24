import React from 'react';
import DiscoverFilters from "../../Containers/Discover/DiscoverFilters";

const InitialFilteringPage = () => {
    return (
        <div className="home-full-view">
            <div className="container home-caption">
                <h1>Life takes you to unexpected <br/> place, we will take you home.</h1>
                <div className="home-filter">
                    <DiscoverFilters cityFilterTitle={"To"}>
                        <span className="find-src"><input type="button"/></span>
                    </DiscoverFilters>
                </div>
            </div>
        </div>

    );
};

export default InitialFilteringPage;