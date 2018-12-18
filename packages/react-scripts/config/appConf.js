'use strict';

const paths = require('./paths');
const packageJson = require(paths.appPackageJson);
const babelrc = require(paths.appBabelrc);
const eslintrc = require(paths.appEslintrc);

module.exports = {
  packageJson: packageJson,
  babelrc: babelrc,
  eslintrc: eslintrc
};
