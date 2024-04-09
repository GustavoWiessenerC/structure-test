const { defineConfig } = require('cypress');
const { getConfigurationByFile } = require('./cypress/core/config/configByFile.js');
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const webOptionPack = require('./webpack.config.js');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const dotenv = require ('dotenv');

dotenv.config({ path: './.env'});

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  video: false,
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor({ webpackOptions: webOptionPack }))
      allureWriter(on, config);
    
      const file = config.env.configFile || 'app-qa';
      return config, getConfigurationByFile(file);
      
    }
  }
});
