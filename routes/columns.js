const express = require('express');
const Ticket = require('../models/Column');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, title } = req.body;
  console.log('this is the body: ', req.body)
  Column.create({
    id,
    title
  })
    .then(column => {
      console.log('backend2:', column)
      res.json(column)
    })
    .catch(err => {
      console.log('catch:', err)

      res.json(err);
    });
});

module.exports = router;