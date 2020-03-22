import React from 'react';
import styles from './styles.module.css';

const PropertySpecifics = ({}) => {
    return (
        <div className="new-listing-form-bg">
            <h2>Specifics</h2>
            <div className="form-field-bedroom"><label>Bedroom (s)</label><select name="" className="type-select"
                                                                                  onFocus='this.size=5;'
                                                                                  onBlur='this.size=0;'
                                                                                  onChange='this.size=1; this.blur();'>
                <option>Studio</option>
                <option>Lorem Ipsum 2</option>
                <option>Lorem Ipsum 3</option>
                <option>Lorem Ipsum 4</option>
            </select></div>
            <div className="form-field-Bathroom"><label>Bathroom (s)</label><select name="" className="type-select"
                                                                                    onFocus='this.size=5;'
                                                                                    onBlur='this.size=0;'
                                                                                    onChange='this.size=1; this.blur();'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select></div>
            <div className="form-field-size"><label>Size (sqft)</label><input name="" type="text" placeholder="1000"
                                                                              className="type-input"></div>
            <div className="form-field-price"><label>Price ($/mo)</label><input name="" type="text" placeholder="2000"
                                                                                className="type-input"></div>
        </div>
    );
}

export default PropertySpecifics;