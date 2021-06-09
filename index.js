const express = require('express');
const test = require('./routes/test');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');
require('./models/Test');

dotenv.config({ path: './config/config.env' });
const app = express();
app.use(express.json());
dbConnect();
test(app);

const port = process.env.PORT || 5000;

app.listen(port);
