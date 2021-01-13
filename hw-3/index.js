const axios = require('axios');
const API_SECRET = 'fsnU3FyqRpii9h59cEI6og'; // ulya
const RESOURCE_ID = 'UA-186391985-1';
const findLatestIrreversibleTransaction = require('./getLatestIrreversibleTransaction');


const trackEvent = async (value) => {
    const url = 'https://www.google-analytics.com/collect';
    // const url = 'https://www.google-analytics.com/debug/collect';
    let result;
    try {
        const response = await axios({
            method: 'POST',
            url,
            params: {
                v: 1,
                tid: RESOURCE_ID,
                cid: 'test_anton',
                // t: 'pageview',
                // dp: '/example',
                // dt: 'Example Title',
                t: 'event',
                ec: '_GENERAL',
                ea: 'get transaction',
                el: value,
            },
            data: {
                api_secret: API_SECRET,
            }
        });

        result = response.data;
    } catch(err) {
        console.log(err);
    }

    return result;
};

const main = async () => {
    let counter = 0;
    const intervalId = setInterval(async () => {
        try {
            const transactionId = await findLatestIrreversibleTransaction('simpleassets');
            await trackEvent(transactionId);
            counter++;
            console.log(counter, transactionId);
            if (counter > 200) {
                clearInterval(intervalId);
            }
        } catch(err) {
            clearInterval(intervalId);
        }
    }, 5000);
};


main();