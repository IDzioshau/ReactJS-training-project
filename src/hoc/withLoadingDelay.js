import React, { useState } from 'react';
import '../components/CardList/Card/Card.css';
import MDSpinner from "react-md-spinner";

const withLoadingDelay = WrappedComponent => {
    return props => {
        const [state, setState] = useState({ show: false });

        const showComponent = () => {
            setTimeout(() => setState({ show: true }), 2000);
        };

        return state.show ? (
            <WrappedComponent {...props} />
        ) : (
            <div className='card'>
                <MDSpinner duration={2000} />
                {showComponent()}
            </div>
        );
    };
};

export default withLoadingDelay;
