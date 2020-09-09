import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
    displayTime: PropTypes.number.isRequired,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

// todo: add donations
function MainView({ artistName, displayTime, donatioons }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1000);
    }
    return (
        <div className={`main__wrapper ${shouldAnimate === 'in' ? 'main_enter__animation' : 'main_leave__animation'}`}>
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

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
