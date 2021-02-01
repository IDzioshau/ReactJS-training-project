import React from 'react';
import './CardBody.css';

const CardBody = props => (
    <>
        {props.editMode ? (
            <textarea onChange={props.changed} defaultValue={props.text} />
        ) : (
            <p>{props.text}</p>
        )}
    </>
);

export default CardBody;
