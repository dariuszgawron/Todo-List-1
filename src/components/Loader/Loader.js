import React from "react";

import './Loader.scss';

const Loader = props => {
    return (
        <div className={`loader ${props.isLoading ? 'loader--active' : ''}`} ref={props.loaderRef}>
            <div className="loader__logo">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <h2 className="loader__title">TODO</h2>
            </div>
            <div className="loader__spinner">
                {/* Loading... */}
            </div>
        </div>
    )
};

export default Loader;