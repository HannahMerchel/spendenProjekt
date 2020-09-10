import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Input, Button } from 'chayns-components';
import './mobileApp.css';

// mobile view change here.
class MobileApp extends PureComponent {
    constructor(events) {
        super();
        this.state = {
            donationValue: 0,
            event: events.events,
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
    changeDonationValue(e) {
        this.setState({
            donationValue: e === '' ? 0 : parseInt(e, 10),
        });
    }

    addDonation(donation) {
        this.setState((prevState) => ({
            donationValue: prevState.donationValue + donation,
        }));
    }

    render() {
        const { donationValue, event } = this.state;
        return (
            <div className="content__card">
                <h2 className="text">
                    {`Wie viel möchtest du an ${event.shows[0].artistName} spenden?`}
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
                        onChange={(e) => this.changeDonationValue(e)}
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
