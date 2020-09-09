import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Input, Button } from 'chayns-components';
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
        this.setState({
            donationValue: event === '' ? 0 : parseInt(event, 10),
        });
    }

    addDonation(donation) {
        this.setState((prevState) => ({
            donationValue: prevState.donationValue + donation,
        }));
    }

    render() {
        const { artistName, donationValue } = this.state;
        return (
            <div className="content__card">
                <h2 className="text">
                    {`Wie viel möchtest du an ${artistName} spenden?`}
                </h2>
                <div className="donationValues">
                    <Button className="button btn" onClick={() => this.addDonation(1)}>
                        1€
                    </Button>
                    <Button className="button btn" onClick={() => this.addDonation(2)}>
                        2€
                    </Button>
                    <Button className="button btn" onClick={() => this.addDonation(5)}>
                        5€
                    </Button>
                    <Button className="button btn" onClick={() => this.addDonation(50)}>
                        50€
                    </Button>
                    <Input
                        type="number"
                        className="donationInput"
                        onChange={(event) => this.changeDonationValue(event)}
                        value={donationValue === 0 ? '' : donationValue}
                        placeholder="Betrag"
                    />
                    <Button className="button btn" onClick={this.sendDonation}>
                        Ok
                    </Button>
                </div>
                {/* <p>{donationValue}</p> */}
            </div>
        );
    }
}

export default MobileApp;
export const MobileHotApp = hot(MobileApp);
