import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CardInfo.css';
import { editCard } from '../../store/actions';

export class CardInfo extends Component {
    constructor(props) {
        super(props);
        let card = null;
        props.cards.forEach(element => {
            if (element.id === props.match.params.id) {
                card = element;
            }
        });
        this.state = {
            caption: card.caption,
            text: card.text,
            newCaption: card.caption,
            newText: card.text,
            editMode: false,
        };
    }

    switchEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    };

    saveData = () => {
        this.switchEditMode();
        this.setState({
            caption: this.state.newCaption,
            text: this.state.newText,
        });
        this.props.handleEditCard({
            id: this.props.match.params.id,
            caption: this.state.newCaption,
            text: this.state.newText,
        });
    };

    cancelData = () => {
        this.switchEditMode();
    };

    captionChangedHandler = event => {
        this.setState({
            newCaption: event.target.value,
        });
    };

    textChangedHandler = event => {
        this.setState({
            newText: event.target.value,
        });
    };

    render() {
        const { caption, text, editMode } = this.state;

        return editMode ? (
            <div className="card-info">
                <br />
                <input
                    type="text"
                    onChange={this.captionChangedHandler}
                    defaultValue={caption}
                />
                <br />
                <textarea
                    onChange={this.textChangedHandler}
                    defaultValue={text}
                />
                <br />
                <button onClick={this.saveData}>Save</button>
                <br />
                <button onClick={this.cancelData}>Cancel</button>
            </div>
        ) : (
            <div className="card-info">
                <h1>{caption}</h1>
                <p>{text}</p>
                <button onClick={this.switchEditMode}>Edit</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ cards: state.cards });

const mapDispatchToProps = {
    handleEditCard: editCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardInfo);
