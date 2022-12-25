const fetch = require('node-fetch');

const BASE_URL = 'https://finnhub.io/api/v1/';
const config = {
  method: 'GET',
  headers: {
    'X-Finnhub-Token': process.env.FIN_KEY,
  },
};

const getQuery = async (query) => {
  return await fetch(`${BASE_URL}/search?q=${query}`, config).then(
    (res) => res
  );
};

module.exports = {
  getQuery,
};
