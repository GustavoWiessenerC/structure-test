const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@core': path.resolve('cypress/', 'core'),
      '@helper': path.resolve('cypress/', 'helper'),
      '@fixtures': path.resolve('cypress/', 'fixtures')
    }
  }
};
