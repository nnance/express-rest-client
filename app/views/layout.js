var cheerio = require('cheerio');

exports.render = function(req, res, callback){
	res.render('layout', function(err, html){
		var $ = cheerio.load(html);
		callback(err,$);
	});
};