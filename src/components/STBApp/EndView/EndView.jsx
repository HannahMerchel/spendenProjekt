import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './endView.scss';

const propTypes = {
    sum: PropTypes.number,
    artistName: PropTypes.string,
    displayTime: PropTypes.number.isRequired,
};

const defaultProps = {
    sum: 10.00,
    artistName: 'diesen Künstler',
};

function EndView({ sum, artistName, displayTime }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1000);
    }
    return (
        <div className={`end__wrapper ${shouldAnimate === 'in' ? 'end_enter__animation' : 'end_leave__animation'}`}>
            <div className="end__text">
                <p>
                    Vielen Dank allen für die
                </p>
                <p>
                    {`Spende von ${sum}€`}
                </p>
                <p>
                    {`- ${artistName}`}
                </p>
            </div>
        </div>
    );
}

EndView.propTypes = propTypes;
EndView.defaultProps = defaultProps;

export default EndView;
