import React, { Component } from 'react';
import './Settings.css';
import styled from 'styled-components';
import { switchReadOnlyMode } from '../../store/actions/actions';
import { connect } from 'react-redux';

const StyledCheckbox = styled.input`
    margin: 10px;
    transform: scale(1.5);
    &:hover {
        box-shadow: 0px 0px 10px rgba(11, 161, 56, 0.5);
        cursor: pointer;
    }
`;

export class Settings extends Component {
    switchReadOnlyMode = () => {
        this.setState({
            readOnlyMode: !this.state.readOnlyMode,
        });
    };

    render() {
        return (
            <>
                <h1>Settings</h1>
                <StyledCheckbox
                    id="readOnlyMode"
                    type="checkbox"
                    onChange={this.props.switchReadOnlyMode}
                    checked={this.props.readOnlyMode}
                />
                <label htmlFor="readOnlyMode">Read-Only</label>
            </>
        );
    }
}

const mapStateToProps = state => ({ readOnlyMode: state.cardReducer.readOnlyMode });

const mapDispatchToProps = {
    switchReadOnlyMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
