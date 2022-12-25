const router = require('express').Router();

const Client = require('./utils');

const getStonkQuery = (query) => {
  return Client().get(`/search?q=${query}`);
};

router.get('/search', (req, res, next) => {
  const { query } = req.body;
  getStonkQuery(query)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
