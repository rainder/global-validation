'use strict';

var _ = require('lodash');

module.exports = exports = {};

/**
 *
 * @param actual
 * @returns {*}
 */
exports.type = function (actual) {
  return _.isUndefined(actual) || _.isBoolean(actual);
};

/**
 *
 * @param actual
 * @returns {boolean}
 */
exports.required = function (actual) {
  return !_.isUndefined(actual);
};