let express = require('express');
let router = express.Router();

let rate = require('../services/rate');

/* GET rate. */
router.get('/api/rate', async function (req, res, next) {
    const currentRate = await rate.getCurrentRate();

    if(currentRate !== undefined) {
        res.json(currentRate);
    } else {
        res.status(400);
        res.send('');
    }
});

module.exports = router;
