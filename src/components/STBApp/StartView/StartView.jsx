import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './startView.scss';

const propTypes = {
    artistName: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
};

const defaultProps = {
};

function StartView({ artistName, eventName }) {
    const [ shouldAnimate, setShouldAnimate ] = useState(true);
    setTimeout(() => { useEffect(() => {
        setShouldAnimate(true);
    }); }, 1500);
    return (
        <div className={shouldAnimate === true ? 'start_animated__wrapper' : 'start__wrapper'}>
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
