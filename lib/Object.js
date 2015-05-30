'use strict';

var _ = require('lodash');

module.exports = exports = {};

/**
 *
 * @param actual {Object}
 * @returns {*}
 */
exports.type = function (actual) {
  return _.isUndefined(actual) || _.isObject(actual);
};

/**
 *
 * @param actual {Object}
 * @returns {boolean}
 */
exports.required = function (actual) {
  return !_.isUndefined(actual);
};

/**
 *
 * @param cb
 * @param value
 * @returns {*}
 */
exports.fn = function (/*args*/) {
  let args = Array.prototype.slice.call(arguments);
  let cb = args.shift();

  return cb.apply(this, args);
}