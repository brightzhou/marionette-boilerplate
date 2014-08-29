var express = require('express'),
	winston = require('winston'),
	app = express();

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: true
		})
	]
});

app.use(express.static(__dirname + '/../public'));

app.listen(3000, function () {
	logger.info('App running on port 3000 o//');
});