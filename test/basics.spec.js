'use strict';
require('./../lib');
const myObject = require('./../lib/Object');
const methods = Object.keys(myObject);

const expect = require('chai').expect;

describe('basic tests', function () {

  it('should extend native constructors', function () {
    expect(Object.__proto__).to.have.keys(methods);
    expect(Object.keys(Object)).to.have.length(0);
  });

  it('should return an instance of a validator', function () {
    let result = Object.type();

    expect(result).to.be.a('function');
    expect(result).to.have.keys(['type']);
    expect(result.__proto__).to.have.keys(methods);
  });

  it('should return an extended version of a validator instance', function () {
    let result = Object.type().required();

    expect(result).to.have.keys(['type', 'required']);
    expect(result.__proto__).to.have.keys(methods);
  });

  it('should respect custom fn functions', function () {
    let result = Object.fn(check);
    let ctx = {};

    result.fn.call(ctx, 123);

    expect(result).to.have.keys(['fn']);
    expect(result.__proto__).to.have.keys(methods);

    function check(value) {
      expect(this).to.equal(ctx);
      expect(value).to.equal(123);
      return value;
    }
  });

  it('should respect nested custom fn functions', function () {
    let result = Object.type().fn(check);
    let ctx = {};

    result.fn.call(ctx, 123, 'a.t');

    expect(result).to.have.keys(['type', 'fn']);
    expect(result.__proto__).to.have.keys(methods);

    function check(value, key) {
      expect(this).to.equal(ctx);
      expect(value).to.equal(123);
      expect(key).to.equal('a.t');
      return value;
    }
  });

  it('should respect context', function () {
    let validation = Object.type().fn(check);
    let ctx = {};
    let o = {a:5};

    validation.call(ctx, o, 'a.t');

    function check(value, key) {
      expect(this).to.equal(ctx);
      expect(value).to.equal(o);
      expect(key).to.equal('a.t');
      return value;
    }
  });
});