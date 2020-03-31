import React from 'react';
import {MoonLoader} from 'react-spinners';
import { css } from "@emotion/core";

const override = css`
  margin: auto;
`;

const Loader = ({isLoading, children}) => {
    if(!isLoading){
        return children
    }
    return (<MoonLoader
        css={override}
        color={'#7649a6'}
        loading={isLoading}
    />);
}

export default Loader;