'use strict';

var express = require('express');
var fs = require('fs');
var learnJson = require('./learn.json');

var app = module.exports = express();
var favicon = require('serve-favicon');

app.use(express.static(__dirname));
app.use(favicon(__dirname + '/site-assets/favicon.ico'));

Object.defineProperty(module.exports, 'learnJson', {
	set: function (backend) {
		learnJson.backend = backend;
		fs.writeFile(require.resolve('./learn.json'), JSON.stringify(learnJson, null, 2), function (err) {
			if (err) {
				throw err;
			}
		});
	}
});

//start server on local machine
var PORT = 3000;

app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});
