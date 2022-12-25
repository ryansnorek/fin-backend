const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FIN_KEY;
const finnhubClient = new finnhub.DefaultApi();

module.exports = finnhubClient;
