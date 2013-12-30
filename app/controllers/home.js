var mongoose = require('mongoose'),
    view = require('../lib/underscore-view'),
	Article = mongoose.model('Article');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    var $ = view.render('app/views/layout.html');
    var model = {title: 'Generator-Express underscore'};
    var index = view.render('app/views/home/index.html',model);
    $('body').append(index.html());
    res.send($.html());
    // res.render('home/index', {
    //   title: 'Generator-Express MVC',
    //   articles: articles
    // });
  });
};