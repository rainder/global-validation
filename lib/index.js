'use strict';

const _ = require('lodash');

const specs = [{
  fns: require('./Object'),
  constructor: Object
}, {
  fns: require('./String'),
  constructor: String
}, {
  fns: require('./Number'),
  constructor: Number
}, {
  fns: require('./Array'),
  constructor: Array
}, {
  fns: require('./Boolean'),
  constructor: Boolean
}, {
  fns: require('./Function'),
  constructor: Function
}];

/**
 * INITIALISE
 */
for (let spec of specs) {
  initInterface(spec.constructor, spec.fns);
}


function initInterface(constructor, fns) {
  constructor.__proto__ = Object.create({}, constructor.__proto__);

  for (let fnName in fns) {
    let fn = fns[fnName];
    initFn(fnName, fn);
  }

  function initFn(fnName, fn) {
    constructor.__proto__[fnName] = objectFactory;

    function objectFactory(/*args*/) {
      const args = Array.prototype.slice.call(arguments);
      const proto = {};
      const instance = validate;
      proto.__proto__ = instance.__proto__;
      instance.__proto__ = proto;

      instance[fnName] = function (/*value*/) {
        return fn.apply(this || instance, args.concat(Array.prototype.slice.call(arguments)));
      };

      for (let fnName in fns) {
        let fn = fns[fnName];
        proto[fnName] = function (/*args*/) {
          const args = Array.prototype.slice.call(arguments);
          instance[fnName] = function (/*value*/) {
            return fn.apply(this || instance, args.concat(Array.prototype.slice.call(arguments)));
          };
          return instance;
        };
      }

      return instance;

      function validate(/*args*/) {
        let args = Array.prototype.slice.call(arguments);
        args.unshift(instance);
        return processValidation.apply(this, args);
      }
    }
  }
}

function processValidation(/*validationObject, args*/) {
  let args = Array.prototype.slice.call(arguments);
  let validationObject = args.shift();

  let result = {
    success: true,
    failed: []
  };

  for (let fnName in validationObject) {
    if (!validationObject.hasOwnProperty(fnName)) {
      continue;
    }

    if (!validationObject[fnName].apply(this, args)) {
      result.failed.push(fnName);
      result.success = false;
    }
  }

  return result;
}

