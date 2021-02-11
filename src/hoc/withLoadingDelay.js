import React, { useState } from 'react';
import '../components/CardList/Card/Card.css';
import MDSpinner from 'react-md-spinner';

const withLoadingDelay = WrappedComponent => {
    return props => {
        const [loading, setLoading] = useState(false);

        setTimeout(() => setLoading(true), 2000);

        return loading ? (
            <WrappedComponent {...props} />
        ) : (
            <div className="card">
                <MDSpinner duration={2000} />
            </div>
        );
    };
};

export default withLoadingDelay;
