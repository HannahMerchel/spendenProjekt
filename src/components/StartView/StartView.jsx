import React from 'react';
import PropTypes from 'prop-types';
import './startView.scss';

const propTypes = {
    name: PropTypes.string.isRequired,
};

const defaultProps = {
};

function StartView({ name }) {
    return (
        <div className="start__wrapper">
            <div className="start_announcement__wrapper">
                <p className="start__announcement">
                    {`Als nächstes kommt ${name}...`}
                </p>
            </div>
        </div>
    );
}

StartView.propTypes = propTypes;
StartView.defaultProps = defaultProps;

export default StartView;
