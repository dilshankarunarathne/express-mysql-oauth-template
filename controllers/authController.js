const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./User');
const multer = require('multer');
const upload = multer();

router.post('/signup', upload.none(), async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.sendStatus(201);
});

router.post('/login', upload.none(), async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !await bcrypt.compare(req.body.password, user.password)) {
    return res.sendStatus(401);
  }
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  res.send({ token });
});

module.exports = router;
