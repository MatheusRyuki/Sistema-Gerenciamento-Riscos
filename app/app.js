/*eslint-env node*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');        
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('../views/index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static(__dirname + '/public'));