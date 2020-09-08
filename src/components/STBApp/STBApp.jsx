import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './STBapp.scss';
import StartView from './StartView/StartView.jsx';
import MainView from './MainView/MainView.jsx';
import EndView from './EndView/EndView.jsx';

class STBApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            windowHeight: 1080,
            windowWidth: 1920,
            currentArtist: {
                name: 'artist-name',
                image: 'https://tsimg.cloud/75507-29107/69cc44645c67413e63c197884b06d2e37516e9dd_fwebp-h675-w1200.jpg',
                startTime: new Date('September 7, 2020 9:00:00'),
                endTime: new Date('September 7, 2020 10:00:00'),
            },
            donations: [
                {
                    firstName: 'firstname',
                    lastName: 'lastName',
                    amount: 5.00,
                },
                {
                    firstName: 'firstname',
                    lastName: 'lastName',
                    amount: 5.00,
                },
                {
                    firstName: 'firstname',
                    lastName: 'lastName',
                    amount: 5.00,
                },
            ],
        };
        this.showStartView = this.showStartView.bind(this);
        this.showMainView = this.showMainView.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    componentDidMount() {
        this.showStartView();
    }

    async switchView(newView) {
        await this.setState({
            viewComponents: newView,
        });
    }

    async showStartView() {
        const { currentArtist, windowHeight, windowWidth } = this.state;
        const newView = (
            <StartView
                artistName={currentArtist.name}
                eventName="Das Event"
                displayTime="8000"
                style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            />
        );
        this.switchView(newView);
        await setTimeout(() => this.showMainView(), 8000);
    }

    async showMainView() {
        const { currentArtist, donations, windowHeight, windowWidth } = this.state;
        const newView = (
            <MainView
                donations={donations}
                artistName={currentArtist.name}
                displayTime="12000"
                style={{ width: `${windowWidth}px`, height: `${windowHeight}px` }}
            />
        );
        this.switchView(newView);
        await setTimeout(() => this.showEndView(), 12000);
    }

    async showEndView() {
        const { currentArtist, donations, windowHeight, windowWidth } = this.state;
        const newView = (
            <EndView
                donations={donations}
                artistName={currentArtist.name}
                displayTime="4000"
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
