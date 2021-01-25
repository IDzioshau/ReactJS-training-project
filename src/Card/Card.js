import React, { Component } from 'react';
import './Card.css';
import { MdModeEdit } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caption: this.props.caption,
            text: this.props.text,
            newCaption: this.props.caption,
            newText: this.props.text,
            styleFlag: false,
            editMode: false
        };
    };

    switchStyle = () => {
        this.setState({
            styleFlag: !this.state.styleFlag
        });
    };

    switchEditMode = () => {
        if (this.state.styleFlag) {
            this.switchStyle();
        }
        this.setState({
            editMode: !this.state.editMode
        });
    };

    saveData = () => {
        this.switchEditMode();
        this.setState({
            caption: this.state.newCaption,
            text: this.state.newText
        });
    };

    cancelData = () => {
        this.switchEditMode();
    };

    captionChangedHandler = event => {
        this.setState({
            newCaption: event.target.value
        });
    };

    textChangedHandler = event => {
        this.setState({
            newText: event.target.value
        });
    };

    render() {
        const {caption, text, editMode, styleFlag} = this.state;
        const readOnlyMode = this.props.readOnlyMode;
        
        if (readOnlyMode && editMode) {
            this.cancelData();
        };

        return (
            editMode 
            ?
            <div className="card">
                <div className="card-header">
                    <input type="text" onChange={this.captionChangedHandler} defaultValue={caption} />
                    <div className="actions">
                        <BiSave onClick={this.saveData} />
                        <RiArrowGoBackLine onClick={this.cancelData} />
                    </div>
                </div>
                <hr />
                <textarea onChange={this.textChangedHandler} defaultValue={text} />
            </div>
            :
            <div className={styleFlag ? "card2" : "card"}>
                <div className="card-header">
                    <h1>{caption}</h1>
                    <div className="actions">
                        {!readOnlyMode && <MdModeEdit onClick={this.switchEditMode} />}
                        <input type="checkbox" onChange={this.switchStyle} checked={styleFlag} />
                    </div>
                </div>
                <hr />
                <p>{text}</p>
            </div>
        )
    };
};

export default Card;
