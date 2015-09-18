var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'digital-basics'
    },
    port: 5000,
    db: 'mongodb://localhost/digital-basics-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'digital-basics'
    },
    port: 5000,
    db: 'mongodb://localhost/digital-basics-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'digital-basics'
    },
    port: 5000,
    db: 'mongodb://localhost/digital-basics-production'
  }
};

module.exports = config[env];
