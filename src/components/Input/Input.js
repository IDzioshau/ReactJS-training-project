import React from 'react';
import './Input.css';

const Input = props => {
    let element = null;
    switch (props.element) {
        default:
            element = (
                <div className="input">
                    <label>{props.label}</label>
                    <br />
                    <input
                        className={!props.valid ? 'invalid' : ''}
                        type={props.type}
                        value={props.value}
                        onChange={props.changed}
                    />
                </div>
            );
    }
    return element;
};

export default Input;
