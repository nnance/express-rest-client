var layout = require('../views/layout');

exports.pages = function(req, res){
	var model = {
		title: 'Generator-Express MVC'
	};
	layout.render(req, res, function(err, $){
		res.render('info/' + req.params[0], model, function(err, html) {
			$('body').append(html);
			res.send($.html());
	    });		
	});
};
