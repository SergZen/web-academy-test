const cron = require('node-cron');

const rate = require("./rate");
const subscribe = require("./subscribe");
const nodemailer = require("nodemailer");

let send = async () => {
    const currentRate = await rate.getCurrentRate();

    const subject = "Rate USD";
    const message = `Rate USD to UAH: ${currentRate}`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.EMAIL_SENDER_USER,
            pass: process.env.EMAIL_SENDER_PASSWORD
        }
    });

    const subscriptions = await subscribe.getAllSubscriptions();
    for (let subscription of subscriptions) {
        let mailOptions = {
            from: process.env.EMAIL_SENDER_EMAIL,
            to: subscription.email,
            subject: subject,
            html: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

let schedule = async () => {
    cron.schedule(process.env.EMAIL_SENDER_SCHEDULE, async () => {
        await send();
    });
}

module.exports = {
    schedule
};
