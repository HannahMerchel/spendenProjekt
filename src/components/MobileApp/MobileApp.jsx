import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Input } from 'chayns-components';
import './mobileApp.css';

// mobile view change here.
class MobileApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            userName: 'Maik',
            artistName: 'Picasso',
            donationValue: 0,

        };
        this.sendDonation = this.sendDonation.bind(this);
        this.changeDonationValue = this.changeDonationValue.bind(this);
    }

    // sets the firstname of the user to the welcome sentence.
    componentDidMount() {
        this.setState({
            userName: chayns.env.user.firstName,
        });
    }

    // sends the Donation to the artist. On clicking at the button 'OK'.
    sendDonation() {
        const { donationValue } = this.state;

        chayns.dialog.alert('', 'Danke für deine Spende!');
        if (donationValue === 0) {
            chayns.dialog.alert('', 'Geben Sie bitte einen Betrag ein.');
            document.querySelector('.donationInput').value = '';
        }
    }

    // get the value from the input and checks if the input is a digit.
    changeDonationValue(event) {
        const re = /\d*/g;

        // const matcharr = ...event.match(re); <---------
        // document.querySelector('.donationInput').value = ;
        if (re.test(event)) {
            this.setState({
                donationValue: event,
            });
        }
        // console.log(event.match(re));
    }

    render() {
        const { userName, artistName, donationValue } = this.state;
        return (
            <div>
                <h1>
                    {`Hallo ${userName}!`}
                </h1>
                <h2>
                    {`Wie viel möchtest du an ${artistName} spenden?`}
                </h2>
                <div className="donationValues">
                    <button className="button btn" type="button" onClick={() => console.log('5€')}>
                        5€
                    </button>
                    <button className="button btn" type="button" onClick={() => console.log('10€')}>
                        10€
                    </button>
                    <Input type={Number} className="donationInput" onChange={(event) => this.changeDonationValue(event)} placeholder="Betrag" />
                    <button className="button btn" type="button" onClick={this.sendDonation}>
                        Ok
                    </button>
                </div>
                <p>{donationValue}</p>
            </div>
        );
    }
}

export default MobileApp;
export const MobileHotApp = hot(MobileApp);
