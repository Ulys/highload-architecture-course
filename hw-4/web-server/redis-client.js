const redisClient = require('redis').createClient({
    url: 'redis://cache',
    port: 6379,
});

module.exports = {
    get: key => new Promise((resolve, reject) => redisClient.get(key, (err, reply) => {
            if (err) {
                console.log('redis error', err);
                resolve('');
            } else {
                resolve(JSON.parse(reply));
            }
        })),
    set: (key, value) => redisClient.set(key, JSON.stringify(value)),
};
