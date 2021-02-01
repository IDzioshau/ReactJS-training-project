import React from 'react';
import './CardHeader.css';
import { MdModeEdit } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';

const CardHeader = props =>
    props.editMode ? (
        <div className="card-header">
            <input
                type="text"
                onChange={props.changed}
                defaultValue={props.caption}
            />
            <div className="actions">
                <BiSave onClick={props.saveData} />
                <RiArrowGoBackLine onClick={props.cancelData} />
            </div>
        </div>
    ) : (
        <div className="card-header">
            <h1>{props.caption}</h1>
            <div className="actions">
                {!props.readOnlyMode && (
                    <MdModeEdit onClick={props.switchEditMode} />
                )}
                <input
                    type="checkbox"
                    onChange={props.switchStyle}
                    checked={props.styleFlag}
                />
            </div>
        </div>
    );

export default CardHeader;
