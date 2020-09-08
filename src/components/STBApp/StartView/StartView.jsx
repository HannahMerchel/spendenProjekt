import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './startView.scss';
import StartOverlay from './StartOverlay/StartOverlay.jsx';

const propTypes = {
    artistName: PropTypes.string.isRequired,
    displayTime: PropTypes.number.isRequired,
    eventName: PropTypes.string,
};

const defaultProps = {
    eventName: 'Event',
};

function StartView({ artistName, displayTime, eventName }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1500);
        return (
            <div className="start_animation_in__wrapper start__wrapper" style={{ height: '1080px', width: '1920px' }}>
                <StartOverlay title={eventName}/>
                <p className="start__announcement">
                    {`Als nächstes kommt ${artistName}...`}
                </p>
            </div>
        );
    }
    return (
        <div className="start_animation_out__wrapper start__wrapper" style={{ height: '1080px', width: '1920px' }}>
            <StartOverlay title={eventName}/>
            <p className="start__announcement">
                {`Als nächstes kommt ${artistName}...`}
            </p>
        </div>
    );
}

StartView.propTypes = propTypes;
StartView.defaultProps = defaultProps;

export default StartView;
