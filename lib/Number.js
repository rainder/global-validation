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
    type: 'Expected to be a Number'
  }
};

/**
 *
 * @returns {methods}
 */
methods.type = function () {
  this.type = function (value) {
    return _.isUndefined(value) || _.isNumber(value);
  };
};

/**
 *
 * @returns {methods}
 */
methods.required = function () {
  this.required = function (value) {
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
    return value >= expected;
  };
};

/**
 *
 * @param expected
 * @returns {methods}
 */
methods.max = function (expected) {
  this.max = function (value) {
    return value <= expected;
  };
};

/**
 *
 */
methods.oneOf = function (expected) {
  this.oneOf = function (value) {
    return !!~expected.indexOf(value);
  };
};