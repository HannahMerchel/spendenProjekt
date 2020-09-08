import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import STBApp from './STBApp/STBApp.jsx';
import MobileApp from './MobileApp/MobileApp.jsx';

class App extends PureComponent {
    render() {
        if (true || chayns.env && chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet) {
            return (
                <div>
                    <STBApp />
                </div>
            );
        }
        return <MobileApp />
    }
}
export default App;
export const HotApp = hot(App);
