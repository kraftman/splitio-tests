const express = require('express')
const app = express()
const home = require('./routes/home');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));   

app.use('/', home);
if (require.main === module) {
  app.listen(8080, () => console.log('Example app listening on port 8080!'))
}

module.exports = app
