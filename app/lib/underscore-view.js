var cheerio = require('cheerio'),
    _ = require('underscore'),
    fs = require('fs');

exports.render = function(fileName, model) {
    var tpl = fs.readFileSync( fileName ).toString();
    var template = _.template(tpl);
    return cheerio.load(template(model));
};
