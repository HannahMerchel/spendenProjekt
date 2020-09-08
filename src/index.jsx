import ReactDOM from 'react-dom';
import React from 'react';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Components
import STBApp, { STBHotApp } from './components/STBApp/STBApp.jsx';
import MobileApp, { MobileHotApp } from './components/MobileApp/MobileApp.jsx';

const tappElement = document.querySelector('.tapp');
const isSTB = false;

const render = () => {
    if (isSTB) {
        console.log('stb ansicht');
        ReactDOM.render(
            IS_DEVELOPMENT ? <STBHotApp /> : <STBApp />,
            tappElement,
        );
    }
    else {
        ReactDOM.render(
            IS_DEVELOPMENT ? <MobileHotApp /> : <MobileApp />,
            tappElement,
        );
    }
};

chayns.ready.then(render).catch((error) => {
    // eslint-disable-next-line no-console
    console.warn('No chayns environment found.', error);
});
