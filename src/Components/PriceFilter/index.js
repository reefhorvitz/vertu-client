import React from 'react';
import Slider from "@material-ui/core/Slider";

const PriceFilter = ({onChange}) => {
    const min = 1000;
    const max = 5000;
    const marks = [{value: min, label: `$${min}`}, {value: max, label: `$${max}`}];
    return (
        <div className="price">
            <h4>Price</h4>
            <Slider step={50}
                    onChangeCommitted={(e, value) => onChange(value)}
                    defaultValue={min}
                    marks={marks}
                    min={1000}
                    max={5000}
                    valueLabelDisplay="auto"/>
        </div>

);
}

export default PriceFilter;