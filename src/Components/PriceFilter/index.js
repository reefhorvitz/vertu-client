import React from 'react';
import Slider from "@material-ui/core/Slider";

const PriceFilter = ({onChange}) => {
    const min = 0;
    const max = 5000;
    const marks = [{value: min, label: `$${min}`}, {value: max, label: `$${max}`}];
    return (
        <div className="price">
            <h4>Price</h4>
            <Slider step={50}
                    onChangeCommitted={(e, value) => onChange(value)}
                    defaultValue={[min, max]}
                    marks={marks}
                    min={min}
                    max={max}
                    valueLabelDisplay="auto"/>
        </div>

);
}

export default PriceFilter;