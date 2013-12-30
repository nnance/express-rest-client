var layout = require('../views/layout');

exports.index = function(req, res){
	var model = {
		title: 'Generator-Express MVC',
	};
	layout.render(req, res, function(err, $){
		res.render('home/index', model, function(err, html) {
			$('body').append(html);
			res.send($.html());
	    });		
	});
};

exports.info = function(req, res) {
	layout.render(req, res, function(err, $){
		res.render('home/info', function(err, html){
			$('body').append(html);
			res.send($.html());
		});
	});
};