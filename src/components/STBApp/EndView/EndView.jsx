import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './endView.scss';

const propTypes = {
    sum: PropTypes.number,
    artistName: PropTypes.string,
};

const defaultProps = {
    sum: 10.00,
    artistName: 'diesen Künstler',
};

function EndView({sum, artistName}) {
    return (
        <div className="end__wrapper">
            <p className="end__text">{`Vielen Dank allen für ${sum}€ für ${artistName}`}</p>
        </div>
    );
}

EndView.propTypes = propTypes;
EndView.defaultProps = defaultProps;

export default EndView;
