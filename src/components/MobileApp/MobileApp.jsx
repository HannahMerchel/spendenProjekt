import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Input } from 'chayns-components';

// mobile view change here.
class MobileApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            userName: 'Maik',
            artistName: 'Picaso',
            donationValue: 1,

        };
        this.sendDonation = this.sendDonation.bind(this);
    }

    componentDidMount() {
        this.setState({
            userName: chayns.env.user.firstName,
        });
    }

    sendDonation() {
        const { donationValue } = this.state;
        console.log(donationValue);
        chayns.dialog.alert('', 'Danke für deine Spende!');
    }

    render() {
        const { userName, artistName } = this.state;
        return (
            <div>
                <h1>
                    {`Hallo ${userName}!`}
                </h1>
                <h2>
                    {`Wie viel möchtest du an ${artistName} spenden?`}
                </h2>
                <div className="donationValue">
                    <button className="button" type="button" onClick={() => console.log('5€')}>
                        5€
                    </button>
                    <button className="button" type="button" onClick={() => console.log('10€')}>
                        10€
                    </button>
                    <Input placeholder="Betrag"/>
                    <button className="button" type="button" onClick={this.sendDonation}>
                        Ok
                    </button>
                </div>
            </div>
        );
    }
}

export default MobileApp;
export const MobileHotApp = hot(MobileApp);
