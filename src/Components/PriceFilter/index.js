import React from 'react';
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: '#7649a6',
            },
            track: {
                color: '#7649a6'
            },
            rail: {
                color: '#7649a6'
            }
        }
    }
});

const PriceFilter = ({onChange, defaultMin, defaultMax}) => {
    const min = 0 ;
    const max = 5000;
    const marks = [{value: min, label: `$${min}`}, {value: max, label: `$${max}`}];
    return (
        <div className="price">
            <h4>Price</h4>
            <ThemeProvider theme={muiTheme}>
                <Slider step={50}
                        onChangeCommitted={(e, value) => onChange(value)}
                        defaultValue={[defaultMin, defaultMax]}
                        marks={marks}
                        min={min}
                        max={max}
                        valueLabelDisplay="auto"/>
            </ThemeProvider>
        </div>

);
}

export default PriceFilter;