/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */

var _ = require('lodash');

var interfaceMap = [
  {
    builder: require('./String'),
    constructor: String
  },
  {
    builder: require('./Number'),
    constructor: Number
  },
  {
    builder: require('./Array'),
    constructor: Array
  }
]

/**
 * INITIALISE
 */
_.each(interfaceMap, function (spec) {
  var methods = Object.keys(spec.builder.methods);

  /**
   * add fn function to all constructors
   */
  _.each(methods.concat('fn'), function (methodName) {
    /**
     *
     * @returns {Validator}
     * @constructor
     */
    function ValidationConstructor() {
      var proto = _.transform(spec.builder.methods, transformFn, {});

      proto.fn = fn;
      proto.__proto__ = Function.prototype;
      Validator.__proto__ = proto;

      Validator['type'].call(Validator);

      if (methodName !== 'type') {
        Validator[methodName].apply(Validator, arguments);
      }

      return Validator;


      /**
       *
       * @param value
       * @returns {*}
       * @constructor
       */
      function Validator(value) {
        return validate.call(this, Validator, value);
      }

      /**
       *
       * @param result
       * @param method
       * @param name
       */
      function transformFn(result, method, name) {
        result[name] = function () {
          method.apply(Validator, arguments);
          return Validator;
        };
      }

      /**
       *
       * @param callback
       * @returns {Validator}
       */
      function fn(callback) {
        this.fn = callback;
        return Validator;
      }
    }

    spec.constructor[methodName] = ValidationConstructor;
  });



  /**
   *
   * @param Validator
   * @param value
   * @returns {*}
   */
  function validate(Validator, value) {
    var keys = Object.keys(Validator);
    var ctx = this;

    for (var i = 0; i < keys.length; i++) {
      var validationFunctionName = keys[i];
      var validate = Validator[validationFunctionName];
      var result = validate.call(ctx, value);
      var message = 'The field is not valid. Expected: %1, Actual: %2';
      if (result === true) {
        continue;
      }

      if (spec.constructor.hasOwnProperty(validationFunctionName)
        && spec.constructor[validationFunctionName].message)
      {
        message = spec.constructor[validationFunctionName].message;
      } else if (spec.builder.messages.hasOwnProperty(validationFunctionName)
        && spec.builder.messages[validationFunctionName])
      {
        message = spec.builder.messages[validationFunctionName];
      }

      if (result !== undefined) {
        return message.replace('%1', this.expected).replace('%2', this.actual);
      }
    }

    return null;
  }

});

