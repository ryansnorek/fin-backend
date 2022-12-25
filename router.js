const router = require('express').Router();

const { getQuery } = require('./utils');

router.get('/search', (req, res, next) => {
  const { query } = req.body;
  getQuery(query)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
