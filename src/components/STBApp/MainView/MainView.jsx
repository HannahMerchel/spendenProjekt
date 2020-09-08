import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

function MainView({ artistName, donations }) {
    return (
        <div className="main__wrapper">
            <div className="main__content">
                <p className="main__text">
                    {`Gefällt dir die Show? Dann spende ${artistName} doch etwas:`}
                </p>
                <div className="main_calling_code__wrapper">
                    <p> callingCode </p>
                </div>
            </div>

        </div>
    );
}

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
