require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

const authController = require('./authController');
const securedController = require('./securedController');

app.use(cors()); 
app.use(express.json());

app.use('/auth', authController);
app.use('/secured', securedController);

app.listen(3000, () => console.log('Server started on port 3000'));
