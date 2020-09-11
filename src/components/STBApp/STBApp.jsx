import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './STBapp.scss';
import StartView from './StartView/StartView.jsx';
import MainView from './MainView/MainView.jsx';
import EndView from './EndView/EndView.jsx';

class STBApp extends PureComponent {
    constructor(events) {
        super();
        this.state = {
            windowHeight: 1080,
            windowWidth: 1920,
            event: events.events,
        };
        this.showStartView = this.showStartView.bind(this);
        this.showMainView = this.showMainView.bind(this);
        this.switchView = this.switchView.bind(this);
        this.getCurrentShow = this.getCurrentShow.bind(this);
    }

    componentDidMount() {
        this.getCurrentShow();
    }

    // sets currentShow to the first show and starts the view-loop with showStartView
    async getCurrentShow() {
        await this.setState((prevState) => ({
            currentShow: prevState.event.shows[0],
        }));
        this.showStartView();
    }

    async switchView(newView) {
        await this.setState({
            viewComponents: newView,
        });
    }

    // switches to the start-view and starts a timer to switch to the main-view
    async showStartView() {
        const { event, currentShow } = this.state;
        const newView = (
            <StartView
                artistName={currentShow.artistName}
                eventName={event.eventName}
                image={currentShow.artistImg}
                displayTime={8000}
            />
        );
        this.switchView(newView);
        //await setTimeout(() => this.showMainView(), 8000);
    }

    // switches to the main-view and starts a timer to switch to the end-view
    async showMainView() {
        const { currentShow, windowHeight, windowWidth } = this.state;
        const newView = (
            <MainView
                donations={currentShow.donations}
                artistName={currentShow.artistName}
                displayTime={12000}
                style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            />
        );
        this.switchView(newView);
        await setTimeout(() => this.showEndView(), 12000);
    }

    // switches to the end-view and starts a timer to switch back to the start-view
    async showEndView() {
        const { currentShow, windowHeight, windowWidth } = this.state;
        let donationsSum = 0;
        currentShow.donations.forEach((entry) => {
            donationsSum += entry.amount;
        });
        const newView = (
            <EndView
                sum={donationsSum}
                artistName={currentShow.artistName}
                displayTime={4000}
                style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            />
        );
        this.switchView(newView);
        await setTimeout(() => this.showStartView(), 4000);
    }

    render() {
        const { viewComponents } = this.state;
        return (
            <div>
                <div className="view__wrapper">
                    <video
                        className="video__background"
                        poster="https://video.tsimg.space/75507-21103/714d16a5-df16-403f-b6d5-89486f49e216.jpg"
                        playsInline
                        src="https://video.tsimg.space/75507-21103/714d16a5-df16-403f-b6d5-89486f49e216.mp4"
                        autoPlay
                        muted
                        loop
                    />
                    {viewComponents}
                </div>
            </div>
        );
    }
}

export default STBApp;
export const STBHotApp = hot(STBApp);
