import React from 'react';
import {PacmanLoader} from 'react-spinners';

const Loader = ({isLoading, children}) => {
    if(!isLoading){
        return children
    }
    return (<PacmanLoader
        margin={'auto'}
        size={40}
        color={'#7649a6'}
        loading={isLoading}
    />);
}

export default Loader;