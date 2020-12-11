import React from 'react';
import './Loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div className="loadin-container">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
}

export default Loader;