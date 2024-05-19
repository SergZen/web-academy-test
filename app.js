require("dotenv").config();
const express = require('express');
const cors = require('cors-express');
const options = {
    allow : {
        origin: '*',
        methods: 'GET,POST',
        headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override'
    }
};

const rateRouter = require('./src/routes/rate');
const subscribeRouter = require('./src/routes/subscribe');

const emailSender = require('./src/services/email-sender');

const app = express();

app.use(cors(options));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rateRouter);
app.use('/', subscribeRouter);

(async () => {
    await emailSender.schedule();
})();

module.exports = app;
