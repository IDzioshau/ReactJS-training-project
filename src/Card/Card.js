import React, { Component } from 'react';
import './Card.css';
import { MdModeEdit } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';


class Card extends Component {
    state = {
        caption: this.props.caption,
        text: this.props.text,
        newCaption: this.props.caption,
        newText: this.props.text,
        styleFlag: false,
        editMode: false
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
        return (
            this.state.editMode 
            ?
            <div className="card">
                <div className="card-header">
                    <input type="text" onChange={this.captionChangedHandler} defaultValue={this.state.caption} />
                    <div className="actions">
                        <BiSave onClick={this.saveData} />
                        <RiArrowGoBackLine onClick={this.cancelData} />
                    </div>
                </div>
                <hr />
                <textarea onChange={this.textChangedHandler} defaultValue={this.state.text} />
            </div>
            :
            <div className={this.state.styleFlag ? "card2" : "card"}>
                <div className="card-header">
                    <h1>{this.state.caption}</h1>
                    <div className="actions">
                        <MdModeEdit onClick={this.switchEditMode} />
                        <input type="checkbox" onChange={this.switchStyle} checked={this.state.styleFlag} />
                    </div>
                </div>
                <hr />
                <p>{this.state.text}</p>
            </div>
        )
    };
};

export default Card;
