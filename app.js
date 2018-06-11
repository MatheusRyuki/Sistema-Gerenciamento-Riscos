/*eslint-env node*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');        
app.use(express.static(__dirname + "/public"));
console.log(__dirname);


app.get('/', function (req, res) {
  res.render('/views/index');
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Servidor funcionando"');
});

app.use(express.static(__dirname + '/public'));