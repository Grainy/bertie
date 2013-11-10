var express = require('express'), 
	routes = require('./api/routes'),
	http = require('http'),
	path = require('path'),
	cors = require('cors'),
	app = express();

var corsOptions = {
	origin: true
};

app.use(cors(corsOptions));
app.use(express.bodyParser());
app.use(require("express-chrome-logger"));
app.use(app.router);

app.get('/', function (req, res) {
	res.send(200);
});

// create reference
app.post('/ref', routes.ref);

http.createServer(app).listen(3001);