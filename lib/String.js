/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */

var _ = require('lodash');
var methods = {};

module.exports = exports = {
  methods: methods,
  messages: {
    required: 'Required',
    min: 'Min length',
    max: 'Max length',
    type: 'Expected to be a String',
    len: 'Length'
  }
};

/**
 *
 * @returns {methods}
 */
methods.type = function () {
  this.type = function (value) {
    this.actual = value;
    return _.isUndefined(value) || _.isString(value);
  };
};

/**
 *
 * @returns {methods}
 */
methods.required = function () {
  this.required = function (value) {
    this.actual = value;
    return !_.isUndefined(value);
  };
};

/**
 *
 * @param expected
 * @returns {methods}
 */
methods.min = function (expected) {
  this.min = function (value) {
    this.expected = expected;
    this.actual = value.length;
    return this.actual >= expected;
  };
};

/**
 *
 * @param expected
 * @returns {methods}
 */
methods.max = function (expected) {
  this.max = function (value) {
    this.expected = expected;
    this.actual = value.length;
    return this.actual <= expected;
  };
};

/**
 *
 * @param expected
 * @returns {methods}
 */
methods.len = function (expected) {
  this.len = function (value) {
    this.expected = expected;
    this.actual = value.length;
    return this.actual === expected;
  };
};

/**
 *
 */
methods.oneOf = function (expected) {
  this.oneOf = function (value) {
    this.expected = expected;
    this.actual = value;
    return !!~expected.indexOf(value);
  };
};