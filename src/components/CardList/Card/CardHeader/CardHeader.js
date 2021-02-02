import React from 'react';
import './CardHeader.css';
import { MdModeEdit } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';

const CardHeader = props => {
    const {
        editMode,
        changed,
        caption,
        saveData,
        cancelData,
        readOnlyMode,
        switchEditMode,
        switchStyle,
        styleFlag,
    } = props;

    return editMode ? (
        <div className="card-header">
            <input type="text" onChange={changed} defaultValue={caption} />
            <div className="actions">
                <BiSave onClick={saveData} />
                <RiArrowGoBackLine onClick={cancelData} />
            </div>
        </div>
    ) : (
        <div className="card-header">
            <h1>{caption}</h1>
            <div className="actions">
                {!readOnlyMode && <MdModeEdit onClick={switchEditMode} />}
                <input
                    type="checkbox"
                    onChange={switchStyle}
                    checked={styleFlag}
                />
            </div>
        </div>
    );
};

export default CardHeader;
