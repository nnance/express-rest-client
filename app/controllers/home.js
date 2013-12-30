var mongoose = require('mongoose'),
	cheerio = require('cheerio'),
	_ = require('underscore'),
	fs = require('fs'),
    tpl = fs.readFileSync( 'app/views/home/index.html' ).toString();
    template = _.template(tpl);
	Article = mongoose.model('Article');

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    $ = cheerio.load(template({title: 'Generator'}));
    res.send($.html());
    // res.render('home/index', {
    //   title: 'Generator-Express MVC',
    //   articles: articles
    // });
  });
};