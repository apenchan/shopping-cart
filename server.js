var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
	res.sendfile('./index.html');
});

app.listen(port);
console.log("==========================");
console.log("Server is running on Shopping Cart" + port);
console.log("===========================");