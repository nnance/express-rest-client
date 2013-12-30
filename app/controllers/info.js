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

	rest.get('http://loopthread.appspot.com/rest/calendars/agxzfmxvb3B0aHJlYWRyKgsSD0NhbGVuZGFyQ2F0YWxvZxjxqAIMCxINRXZlbnRDYWxlbmRhchgCDA/feed').on('complete', function(data) {
		var model = {
			title: 'Generator-Express MVC',
			events: data
		};
		render(model);
	});
};
