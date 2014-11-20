/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */
var chai = require('chai');
var expect = chai.expect;
chai.should();

require('./../lib/index');

describe('Number', function () {

  it('should pass', function () {
    expect((Number.type())(0)).to.equal(null);
    expect((Number.min(1))(1)).to.equal(null);
    expect((Number.max(1))(1)).to.equal(null);
    expect((Number.required())(3)).to.equal(null);

    expect((Number.fn(function (value) {
      return value === 123;
    }))(123)).to.equal(null);

    expect((Number.fn(function (value) {
      return value !== 123;
    }))(1234)).to.equal(null);

    expect(Number.oneOf([1, 2])(1)).to.equal(null);
    expect(Number.oneOf([1, 2])(2)).to.equal(null);
  });

  it('should fail', function () {
    expect((Number.type())('12')).not.to.equal(null);
    expect((Number.min(5))(3)).not.to.equal(null);
    expect((Number.max(10))(11)).not.to.equal(null);
    expect((Number.required())()).not.to.equal(null);

    expect((Number.fn(function (value) {
      return value === 1233;
    }))(1234)).not.to.equal(null);

    expect(Number.oneOf([1, 2])(3)).not.to.equal(null);
  });


});