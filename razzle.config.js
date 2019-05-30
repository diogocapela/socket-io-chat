/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const path = require('path');
const razzleHeroku = require('razzle-heroku');

const alias = require('./src/config/importAlias');

module.exports = {
  modify: (config, { target, dev }, webpack) => {

    // Make it deployable on Heroku
    config = razzleHeroku(config, { target, dev }, webpack);

    // Add support for SCSS
    for (const rule of config.module.rules) {
      if (rule.test && rule.test.toString() === '/\\.module\\.css$/') {
        const scss = { ...rule };
        scss.test = /\.scss$/;
        scss.include = path.join(__dirname, 'src');
        scss.use.push({ loader: 'sass-loader' });
        config.module.rules.push(scss);
        break;
      }
    }

    // Add support for import alias
    for (const key in alias) {
      config.resolve.alias[key] = path.resolve(alias[key]);
    }

    return config;
  },
};
