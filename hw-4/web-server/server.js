const express = require('express');
const app = express();
const mysql = require('mysql');
//redis setup


setTimeout(() => {
    /* UNCOMMENT START for test with REDIS */
    // const redisClient = require('./redis-client');
    /* UNCOMMENT END for test with REDIS */
    const connection = mysql.createConnection({
        host: 'mysqldb',
        port: 3306,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        insecureAuth : true,
        database: 'test',
    });

    // Constants
    const PORT = 8080;
    const HOST = '0.0.0.0';

    app.get('/data', async (req, res) => {
        /* UNCOMMENT START for test with REDIS */
        // const redisResult = await redisClient.get('test_key');
        // if (redisResult) {
        //     return res.json({
        //         status: 'success',
        //         data: redisResult,
        //     });
        // }
        /* UNCOMMENT END for test with REDIS */
        connection.query('SELECT * FROM random_data', function (err, result) {
            if (!err) {
                // redisClient.set('test_key', result);
                return res.json({
                    status: 'success',
                    data: result,
                });
            } else {
                return res.status(500).json({
                    status: 'failure',
                    data: err,
                });
            }
        });
    });

    app.listen(PORT, () => {
        console.log(`Example app listening1 at http://${HOST}:${PORT}`);
        connection.connect((err) => {
            if (err) {
                console.log('connect error', err);
                process.exit(1);
            }
            console.log('connected');
        });
    });

    process.on('uncaughtException', function (err) {
        console.log('uncaughtException:', err);
        connection.destroy();
        process.exit(1);
    });

    process.on('unhandledRejection', (rejection) => {
        console.log('unhandledRejection:', rejection);
    });
}, 5000);
