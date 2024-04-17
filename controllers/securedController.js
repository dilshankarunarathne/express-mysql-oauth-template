const authMiddleware = require('./authMiddleware');

const express = require('express');
const router = express.Router();

router.get('/secured', authMiddleware, (req, res) => {
  res.send('This is a secured route');
});

module.exports = router;
