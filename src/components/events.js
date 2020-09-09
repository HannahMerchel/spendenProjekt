const startDate = new Date('2020, September, 9 15:00:00');
const endDate = new Date('2020, September, 10 15:00:00');

const events = {
    eventName: "Comedy-Dinner im Sherlock's",
    shows: [{
        artistName: 'Frank Lorenz',
        artistImg: 'https://tsimg.cloud/75507-29107/69cc44645c67413e63c197884b06d2e37516e9dd_fwebp-h675-w1200.jpg',
        startTime: startDate,
        endTime: endDate,
        donations: [{
            donator: 'Hannah',
            amount: 10,
        },
        {
            donator: 'Dimitrj',
            amount: 15,
        },
        {
            donator: 'Max',
            amount: 20,
        }],
    }, {
        artistName: 'Alfons Schuhbeck',
        artistImg: '',
        startTime: startDate,
        endTime: endDate,
        donations: [{
            donator: 'Dimitrj',
            amount: 10,
        },
        {
            donator: 'Hannah',
            amount: 15,
        },
        {
            donator: 'Uwe',
            amount: 20,
        }],
    },
    ],
};

export default events;
