import React from 'react';
import DiscoverFilters from "../../Containers/Discover/DiscoverFilters";
import {useHistory} from "react-router-dom";

const InitialFilteringPage = () => {
    const history = useHistory();
    const redirectToQuestions = () => {
        history.push('/questions');
    };

    return (
        <div className="home-full-view">
            <div className="container home-caption">
                <h1>Life takes you to unexpected <br/> place, we will take you home.</h1>
                <div className="home-filter">
                    <DiscoverFilters cityFilterTitle={"To"}>
                        <span className="find-src"><input type="button" onClick={redirectToQuestions}/></span>
                    </DiscoverFilters>
                </div>
            </div>
        </div>

    );
};

export default InitialFilteringPage;