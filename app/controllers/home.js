var mongoose = require('mongoose'),
	layout = require('../views/layout'),
	Article = mongoose.model('Article');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    var model = {
		title: 'Generator-Express MVC',
		articles: articles
	};
	layout.render(req, res, function(err, $){
    	res.render('home/index', model, function(err, html) {
			$('body').append(html);
			res.send($.html());
	    });		
	});
  });
};