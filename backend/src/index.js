const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');

mongoose.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database conected'));

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


app.listen(3333, console.log('server online'));
