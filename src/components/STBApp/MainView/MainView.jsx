import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
    displayTime: PropTypes.number.isRequired,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

function MainView({ artistName, donations, displayTime }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1000);
        return (
            <div className="main__wrapper">
                <div className="main_content__animation_in">
                    <p className="main__text">
                        {`Gefällt dir die Show? Dann spende ${artistName} doch etwas:`}
                    </p>
                    <div
                        className="main_calling_code"
                    />
                </div>

            </div>
        );
    }
    return (
        <div className="main__wrapper">
            <div className="main_content__animation_out">
                <p className="main__text">
                    {`Gefällt dir die Show? Dann spende ${artistName} doch etwas:`}
                </p>
                <div
                    className="main_calling_code"
                />
            </div>

        </div>
    );
}

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
