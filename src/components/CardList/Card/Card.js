import React, { Component } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: this.props.caption,
            text: this.props.text,
            newCaption: this.props.caption,
            newText: this.props.text,
            styleFlag: false,
            editMode: false,
        };
    }

    switchStyle = () => {
        this.setState({
            styleFlag: !this.state.styleFlag,
        });
        this.props.onSelectHandler(this.props.id);
    };

    switchEditMode = () => {
        if (this.state.styleFlag) {
            this.switchStyle();
        }
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

    componentDidUpdate = () => {
        if (this.props.readOnlyMode && this.state.editMode) {
            this.cancelData();
        }
        return true;
    };

    render() {
        const { caption, text, editMode, styleFlag } = this.state;
        const { readOnlyMode } = this.props;

        return (
            <div className={styleFlag ? 'card2' : 'card'}>
                <CardHeader
                    editMode={editMode}
                    changed={this.captionChangedHandler}
                    caption={caption}
                    saveData={this.saveData}
                    cancelData={this.cancelData}
                    styleFlag={styleFlag}
                    readOnlyMode={readOnlyMode}
                    switchEditMode={this.switchEditMode}
                    switchStyle={this.switchStyle}
                />
                <hr />
                <CardBody
                    editMode={editMode}
                    changed={this.textChangedHandler}
                    text={text}
                />
            </div>
        );
    }
}

Card.propTypes = {
    caption: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
    readOnlyMode: PropTypes.bool,
};

export default withLoadingDelay(Card);
