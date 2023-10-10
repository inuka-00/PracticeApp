const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ToDo';

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', function () {
  console.log('connected');
});

app.use(express.json());
app.use(
  cors({
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  })
);

require('./app/routes/data.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
