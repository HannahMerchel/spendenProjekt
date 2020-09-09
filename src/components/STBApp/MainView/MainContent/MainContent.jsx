import React from 'react';
import PropTypes from 'prop-types';
import './mainContent.scss';

const propTypes = {
    artistName: PropTypes.string,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

function MainContent({ artistName, donatioons }) {
    return (
        <div>
            <div className="main__text">
                <p className="main__headline">
                    Gefällt dir die Show?
                </p>
                <p>
                    {`Dann spende ${artistName} doch etwas:`}
                </p>
            </div>
            <div className="main_calling_code" />
            <div className="main_donations">
                <p>Danke für eure Spenden:</p>
            </div>
        </div>
    );
}

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
