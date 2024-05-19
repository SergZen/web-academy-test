const validator = require("email-validator");
const { db } = require("../db");

let isEmailValid = (email) => {
    return validator.validate(email);
}

let isSubscriptionExist = async (email) => {
    await db.models.Subscription.findOne({where: {email: email}});
    const subscription = await db.models.Subscription.findOne({where: {email: email}});
    return subscription !== null;
}

let addNewSubscription = async (email) => {
    try {
        const subscription = await db.models.Subscription.build({ email: email });
        await subscription.save();
    } catch (e) {
        console.log(e);
    }
}

let getAllSubscriptions = async (email) => {
    return await db.models.Subscription.findAll();
}

module.exports = {
    isEmailValid,
    isSubscriptionExist,
    addNewSubscription,
    getAllSubscriptions
};
