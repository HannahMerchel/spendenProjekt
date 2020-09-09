import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import STBApp from './STBApp/STBApp.jsx';
import MobileApp from './MobileApp/MobileApp.jsx';
import events from './events';

class App extends PureComponent {
    render() { // chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet
        if (true) {
            return (
                <div>
                    <STBApp events={events}/>
                </div>
            );
        }
        return <MobileApp/>;
    }
}
export default App;
export const HotApp = hot(App);
