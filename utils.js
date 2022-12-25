const finnhubClient = async () => {
  const axios = await import('./node_modules/axios');

  return axios.create({
    baseURL: 'https://finnhub.io/api/v1/',
    headers: {
      'X-Finnhub-Token': process.env.FIN_KEY,
    },
  });
};

module.exports = finnhubClient;
