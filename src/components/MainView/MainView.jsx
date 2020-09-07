import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

function MainView({artistName, donations}) {
    return (
        <div className="main__wrapper">
            <p className="main__intro">
                {`Gefällt dir die Show? Dann spende ${artistName} doch etwas:`}
            </p>
            <div className="main_calling_code__wrapper">
                <p> callingCode </p>
            </div>
        </div>
    );
}

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
