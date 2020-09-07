import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './app.scss';
import StartView from './StartView/StartView.jsx';
import MainView from './MainView/MainView.jsx';
import EndView from './EndView/EndView.jsx';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            currentArtist: {
                name: 'artist-name',
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
                }
            ]
        };
        this.getNextArtist = this.getNextArtist.bind(this);
        this.getProgram = this.getProgram.bind(this);
        this.showStartView = this.showStartView.bind(this);
        this.showMainView = this.showMainView.bind(this);
        this.switchView = this.switchView.bind(this);
    }

    async componentDidMount() {
        // get program
        this.getProgram();
    }

    async getProgram() {
        await this.setState({
            program: {
                artists: [
                    {
                        name: '0artist-name',
                        startTime: new Date('September 7, 2020 9:00:00'),
                        endTime: new Date('September 7, 2020 10:00:00'),
                    },
                    {
                        name: '1artist-name',
                        startTime: new Date('September 7, 2020 10:00:00'),
                        endTime: new Date('September 7, 2020 11:00:00'),
                    },
                    {
                        name: '2artist-name',
                        startTime: new Date('September 7, 2020 11:00:00'),
                        endTime: new Date('September 7, 2020 12:00:00'),
                    },
                    {
                        name: '3artist-name',
                        startTime: new Date('September 7, 2020 12:00:00'),
                        endTime: new Date('September 7, 2020 13:00:00'),
                    },
                ],
            },
        });
        this.getNextArtist();
    }

    async getNextArtist() {
        await this.setState((prevState) => {
            let index = 0;
            while (index < 3 && prevState.program.artists[index].startTime < new Date() && prevState.program.artists[index].endTime < new Date()) {
                index++;
            }
            return {
                currentArtist: prevState.program.artists[index],
            };
        });
        this.showStartView();
    }

    async switchView(newView) {
        await this.setState((prevState) => {
            return {
                viewComponents: newView,
            };
        });
    }

    async showStartView() {
        const { currentArtist } = this.state;
        const newView = (<StartView name={currentArtist.name}/>);
        this.switchView(newView);
        await setTimeout(() => this.showMainView(), 4000);
    }

    async showMainView() {
        const newView = (<MainView donations={this.state.donations} artistName={this.state.currentArtist.name}/>);
        this.switchView(newView);
        await setTimeout(() => this.showEndView(), 4000);
    }

    async showEndView() {
        const newView = (<EndView donations={this.state.donations} artistName={this.state.currentArtist.name}/>);
        this.switchView(newView);
        await setTimeout(() => this.showStartView(), 4000);
    }

    render() {
        const { viewComponents } = this.state;
        return (
            <div className="view__wrapper" style={{ width: '1920px', height: '1080px' }}>
                {viewComponents}
            </div>
        );
    }
}

export default App;
export const HotApp = hot(App);
