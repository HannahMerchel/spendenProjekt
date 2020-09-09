import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Input } from 'chayns-components';
import './mobileApp.css';

// mobile view change here.
class MobileApp extends PureComponent {
    constructor() {
        super();
        this.state = {
            artistName: 'Picasso',
            donationValue: 0,

        };
        this.sendDonation = this.sendDonation.bind(this);
        this.changeDonationValue = this.changeDonationValue.bind(this);
        this.addDonation = this.addDonation.bind(this);
    }

    // sends the Donation to the artist. On clicking at the button 'OK'.
    sendDonation() {
        const { donationValue } = this.state;
        if (donationValue !== 0) {
            chayns.dialog.alert('', 'Danke für deine Spende!');
        }
    }

    // get the value from the input and checks if the input is a digit.
    changeDonationValue(event) {
        const { donationValue } = this.state;
        const donation = event.substring(event.length - 1, event.length);
        const donationQuery = document.querySelector('.donationInput').value;
        this.setState({
            donationValue: donationValue + +donation,
        });
        if (donationQuery === '') {
            this.setState({
                donationValue: 0,
            });
        }
    }

    addDonation(donation) {
        const donationQuery = document.querySelector('.donationInput').value;
        document.querySelector('.donationInput').value = Number(donationQuery) + Number(donation);
        this.setState((prevState) => ({
            donationValue: prevState.donationValue + +donation,
        }));
    }

    render() {
        const { artistName } = this.state;
        return (
            <div className="content__card">
                <h2 className="text">
                    {`Wie viel möchtest du an ${artistName} spenden?`}
                </h2>
                <div className="donationValues">
                    <button className="button btn" type="button" onClick={() => this.addDonation(1)}>
                        1€
                    </button>
                    <button className="button btn" type="button" onClick={() => this.addDonation(2)}>
                        2€
                    </button>
                    <button className="button btn" type="button" onClick={() => this.addDonation(5)}>
                        5€
                    </button>
                    <button className="button btn" type="button" onClick={() => this.addDonation(50)}>
                        50€
                    </button>
                    <Input type="number" className="donationInput" onChange={(event) => this.changeDonationValue(event)} placeholder="Betrag"/>
                    <button className="button btn" type="button" onClick={this.sendDonation}>
                        Ok
                    </button>
                </div>
                {/* <p>{donationValue}</p> */}
            </div>
        );
    }
}

export default MobileApp;
export const MobileHotApp = hot(MobileApp);
