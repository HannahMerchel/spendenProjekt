import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './startView.scss';

const propTypes = {
    artistName: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    displayTime: PropTypes.number.isRequired,
};

const defaultProps = {
};

function StartView({ artistName, eventName, displayTime }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 2500);
        return (
            <div className="start_animation_in__wrapper" style={{ height: '1080px', width: '1920px' }}>
                <p className="start__announcement">
                    {`Als nächstes kommt ${artistName}...`}
                </p>
            </div>
        );
    }
    return (
        <div className="start_animation_out__wrapper" style={{ height: '1080px', width: '1920px' }}>
            <p className="start__announcement">
                {`Als nächstes kommt ${artistName}...`}
            </p>
        </div>
    );
}

StartView.propTypes = propTypes;
StartView.defaultProps = defaultProps;

export default StartView;
