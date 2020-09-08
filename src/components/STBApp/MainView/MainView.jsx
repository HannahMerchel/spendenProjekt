import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './mainView.scss';

const propTypes = {
    artistName: PropTypes.string,
    displayTime: PropTypes.number.isRequired,
};

const defaultProps = {
    artistName: 'diesem Künstler',
};

// todo: add donations
function MainView({ artistName, displayTime }) {
    const [shouldAnimate, setShouldAnimate] = useState('in');
    if (shouldAnimate === 'in') {
        setTimeout(() => {
            setShouldAnimate('out');
        }, displayTime - 1000);
        return (
            <div className="main__wrapper main_content__animation_in">
                <div className="main__text">
                    <p className="main__headline">
                        Gefällt dir die Show?
                    </p>
                    <p>
                        {`Dann spende ${artistName} doch etwas:`}
                    </p>
                </div>
                <div className="main_calling_code" />
            </div>
        );
    }
    return (
        <div className="main__wrapper main_content__animation_out">
            <div className="main__text">
                <p className="main__headline">
                    Gefällt dir die Show?
                </p>
                <p>
                    {`Dann spende ${artistName} doch etwas:`}
                </p>
            </div>
            <div className="main_calling_code" />
        </div>
    );
}

MainView.propTypes = propTypes;
MainView.defaultProps = defaultProps;

export default MainView;
