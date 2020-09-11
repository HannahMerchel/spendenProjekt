import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
    displayTime: PropTypes.number.isRequired,
    donations: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

const defaultProps = {
    artistName: 'diesem Künstler',
    donations: [],
};

function MainView({ artistName, displayTime, donations }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    let donationComponents = donations.map((entry) => {
        return (
            <p>{`${entry.donator} für ${entry.amount}€`}</p>
        );
    });
    if (donationComponents.length > 4) {
        donationComponents = donationComponents.slice(0, 4);
    }
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1000);
    }
    return (
        <div className={`main__wrapper ${shouldAnimate === 'in' ? 'main_enter__animation' : 'main_leave__animation'}`}>
            <div className="main__text">
                <p className="main__headline">
                    Gefällt Dir die Show?
                </p>
                <p>
                    {`Dann spende ${artistName} doch etwas!`}
                </p>
            </div>
            <div className="main_calling_code" />
            {donations.length !== 0
                ? (
                    <div className="main_donations">
                        <p>Vielen Dank an:</p>
                        <div className="main_donations__entry">
                            {donationComponents}
                        </div>
                    </div>
                )
                : null}
        </div>
    );
}

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
