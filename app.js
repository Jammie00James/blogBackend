const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()


const app = express()

app.use(bodyParser.json());
app.use('/api/post', require('./api/post'));

app.all('/api', (req, res) => {
    res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
  });

app.all('*', (req,res) => {
    res.status(404).send('Page not Found')
  })

module.exports = app
  
