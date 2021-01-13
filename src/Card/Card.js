import React, { useState } from 'react';
import './Card.css';
import { MdModeEdit } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";


const Card = props => {
    const [cardState, setCardState] = useState({
        caption: props.caption,
        text: props.text
    });

    const [cardStateNew, setCardStateNew] = useState({
        caption: props.caption,
        text: props.text
    });

    const [cardStyle, setCardStyle] = useState({
        styleFlag: false
    });

    const [cardEditMode, setCardEditMode] = useState({
        editMode: false
    });

    const switchStyle = () => {
        setCardStyle({
            styleFlag: !cardStyle.styleFlag
        });
    };

    const switchEditMode = () => {
        if (cardStyle.styleFlag) {
            switchStyle();
        }
        setCardEditMode({
            editMode: !cardEditMode.editMode
        });
    };

    const saveData = () => {
        switchEditMode();
        setCardState({
            caption: cardStateNew.caption,
            text: cardStateNew.text
        });
    };

    const cancelData = () => {
        switchEditMode();
    };

    const captionChangedHandler = event => {
        setCardStateNew({
            caption: event.target.value,
            text: cardStateNew.text
        });
    };

    const textChangedHandler = event => {
        setCardStateNew({
            caption: cardStateNew.caption,
            text: event.target.value
        });
    };

    return (
        cardEditMode.editMode 
        ?
        <div className="card">
            <div className="actions">
                <BiSave onClick={saveData} />
                <RiArrowGoBackLine onClick={cancelData} />
            </div>
            <input type="text" onChange={captionChangedHandler} defaultValue={cardState.caption} />
            <hr />
            <textarea onChange={textChangedHandler} defaultValue={cardState.text} />
        </div>
        :
        <div className={cardStyle.styleFlag ? "card2" : "card"}>
            <div className="actions">
                <MdModeEdit onClick={switchEditMode} />
                <input type="checkbox" onChange={switchStyle} checked={cardStyle.styleFlag} />
            </div>
            <h1>{cardState.caption}</h1>
            <hr />
            <p>{cardState.text}</p>
        </div>
    )
};

export default Card;
