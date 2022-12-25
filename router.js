const router = require('express').Router();

const Client = require('./utils');

router.post('/search', (req, res, next) => {
  const { query } = req.body;
  Client.symbolSearch(query, (error, data, response) => {
    res.json(data);
  });
});

module.exports = router;
