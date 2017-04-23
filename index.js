// # SimpleServer
// A simple chat bot server
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var server = http.createServer(app);
app.listen(process.env.PORT || 3000); 

app.get('/', (req, res) => {
  res.send("Home page. Server running okay.");
});
app.post('/post',(req,res)=>{
	res.json(status:"ok");;
});