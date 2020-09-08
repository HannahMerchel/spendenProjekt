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
        return (
            <div className="end__wrapper">
                <div className="end_content__animation_in">
                    <div className="end__text">
                        <p>
                            {`Vielen Dank allen für ${sum}€`}
                        </p>
                        <p>
                            {`für ${artistName}`}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="end__wrapper">
            <div className="end_content__animation_out">
                <div className="end__text">
                    <p>
                        {`Vielen Dank allen für ${sum}€`}
                    </p>
                    <p>
                        {`für ${artistName}`}
                    </p>
                </div>
            </div>
        </div>
    );
}

EndView.propTypes = propTypes;
EndView.defaultProps = defaultProps;

export default EndView;
