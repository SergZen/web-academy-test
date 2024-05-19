var express = require('express');
var router = express.Router();

let subscribe = require('../services/subscribe');

/* POST subscribe. */
router.post('/api/subscribe', async function (req, res, next) {
    const email = req.body.email;

    // if (!email || !subscribe.isEmailValid(email)) {
    //     res.status(400);
    //     res.send('');
    // }
    if (await subscribe.isSubscriptionExist(email)) {
        res.status(409);
        res.send('');
    } else {
        await subscribe.addNewSubscription(email);
        res.status(200);
        res.send('');
    }
});

module.exports = router;
