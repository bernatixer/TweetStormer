var express = require('express');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var port = process.env.PORT || 5000;
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet());

var test = '<div class="tweet">Hola ijsibsdonanj jsadjsdfa<br /><div><p class="copy-tag">Copy</p></div></div>'

app.get('/', function(req, res) {
    res.render('index', {'tweet': test})
})

app.post('/', function(req, res) {
    res.render('index', {'tweet': test})
})

app.get('*', function(req, res) {
    res.render('error');
})

app.listen(port, function() {
    console.log('Server listening at port ' + chalk.blue(port));
})
