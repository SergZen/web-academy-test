const axios = require('axios');

const defaultCurrency = "USD";

let getCurrentDate = () => {
    return new Date().toISOString().replace(/-/g, "").split("T")[0];
}

let getCurrentRate = async () => {
    let currentDate = getCurrentDate();
    let result = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${defaultCurrency}&date=${currentDate}&json`);

    return result.data[0].rate;
};

module.exports = {
    getCurrentRate
};
