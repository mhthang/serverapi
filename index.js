var express = require("express");
var app = express();
app.listen(3201);

app.get("/",function(req,res){
	
            res.json({status: 1});
});

app.post("/test",function(req,res){
	res.setHeader('Access-Control-Allow-Origin', 'mhthang.github.io');
	// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
            res.json({status: 1});
});

