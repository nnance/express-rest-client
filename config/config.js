var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-rest-client'
    },
    port: 3000,
    db: 'mongodb://localhost/express-rest-client-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-rest-client'
    },
    port: 3000,
    db: 'mongodb://localhost/express-rest-client-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-rest-client'
    },
    port: 3000,
    db: 'mongodb://localhost/express-rest-client-production'
  }
};

module.exports = config[env];
