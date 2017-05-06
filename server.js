const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname));

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Headers', 'Content-Type, application/json');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'repairshop',
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {
  connection.query(`select mechanic, type, round(avg, 3) avg, round((avg / nationalavg), 3) ratio from repairs2 order by ratio`,
    (error, results, fields) => {
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
