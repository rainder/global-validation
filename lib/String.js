'use strict';

var _ = require('lodash');

module.exports = exports = {};

/**
 *
 * @param actual {String}
 * @returns {boolean}
 */
exports.type = function (actual) {
  return _.isUndefined(actual) || _.isString(actual);
};

/**
 *
 * @param actual {String}
 * @returns {boolean}
 */
exports.required = function (actual) {
  return !_.isUndefined(actual);
};

/**
 *
 * @param expected {Number}
 * @param actual {String}
 * @returns {boolean}
 */
exports.min = function (expected, actual) {
  return _.isUndefined(actual) || actual.length >= expected;
};

/**
 *
 * @param expected {Number}
 * @param actual {String}
 * @returns {boolean}
 */
exports.max = function (expected, actual) {
  return _.isUndefined(actual) || actual.length <= expected;
};

/**
 *
 * @param expected {Number}
 * @param actual {String}
 * @returns {boolean}
 */
exports.len = function (expected, actual) {
  return _.isUndefined(actual) || actual.length === expected;
};

/**
 *
 * @param expected {Array}
 * @param actual {String}
 * @returns {boolean}
 */
exports.oneOf = function (expected, actual) {
  return _.isUndefined(actual) || !!~expected.indexOf(actual);
};

/**
 *
 * @param expected {RegExp}
 * @param actual {String}
 * @returns {boolean}
 */
exports.regexp = function (expected, actual) {
  return _.isUndefined(actual) || expected.test(actual);
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