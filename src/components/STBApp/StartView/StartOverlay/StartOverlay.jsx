import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './startOverlay.scss';

const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: 'Event',
};

function StartOverlay({ title }) {
    return (
        <div className="overlay">
            <div className="left_slice"/>
            <div className="event_title__wrapper">
                <p className="event__title">
                    {title}
                </p>
            </div>
        </div>
    );
}


StartOverlay.propTypes = propTypes;
StartOverlay.defaultProps = defaultProps;

export default StartOverlay;