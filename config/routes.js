module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	var info = require('../app/controllers/info');
	app.get('/', home.index);
	app.get('/info/*', info.pages);
};
