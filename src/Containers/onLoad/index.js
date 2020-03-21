import React, {useEffect} from 'react';
import {onLoad} from "./actions";
import {connect} from "react-redux";

const OnLoadComponent = ({onload}) => {
    useEffect(() => onload(),[]);
    return null;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onload: () => dispatch(onLoad())
    }
};

export default connect(null, mapDispatchToProps)(OnLoadComponent);