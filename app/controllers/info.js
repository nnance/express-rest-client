var layout = require('../views/layout'),
	rest = require('restler');

exports.pages = function(req, res){
	function render(model) {
		layout.render(req, res, function(err, $){
			res.render('info/' + req.params[0], model, function(err, html) {
				$('body').append(html);
				res.send($.html());
		    });		
		});
	};

	var model = {
		title: 'Generator-Express MVC',
		events: []
	};
	if (req.query.cal) {
		rest.get('http://loopthread.appspot.com/rest/calendars/' + req.query.cal + '/feed').on('complete', function(data) {
			model.events = data;
			render(model);
		});
	} else {
		render(model);		
	}
};
