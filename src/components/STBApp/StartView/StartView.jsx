import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './startView.scss';
import StartOverlay from './StartOverlay/StartOverlay.jsx';

const propTypes = {
    artistName: PropTypes.string.isRequired,
    displayTime: PropTypes.number.isRequired,
    eventName: PropTypes.string,
    image: PropTypes.string.isRequired,
};

const defaultProps = {
    eventName: 'Event',
};

function StartView({ artistName, displayTime, eventName, image }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1500);
    }
    return (
        <div
            className={`start__wrapper ${shouldAnimate === 'in' ? 'start_enter__animation' : 'start_leave__animation'}`}
            style={{ backgroundImage: `url("${image}")` }}
        >
            <StartOverlay title={eventName}/>
            <div className="start_announcement__wrapper">
                <p className="start__announcement">
                    {`Als nächstes kommt ${artistName}...`}
                </p>
            </div>
        </div>
    );
}

StartView.propTypes = propTypes;
StartView.defaultProps = defaultProps;

export default StartView;
