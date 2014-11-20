/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */
var chai = require('chai');
var expect = chai.expect;
chai.should();

require('./../lib/index');

describe('String', function () {

  it('should pass', function () {
    expect((String.type())('')).to.equal(null);
    expect((String.min(1))('1')).to.equal(null);
    expect((String.max(1))('1')).to.equal(null);
    expect((String.len(1))('1')).to.equal(null);
    expect((String.required())('1')).to.equal(null);

    expect((String.fn(function (value) {
      return value === '123';
    }))('123')).to.equal(null);

    expect((String.fn(function (value) {
      return value !== '123';
    }))('1234')).to.equal(null);

    expect(String.oneOf(['1', '2'])('1')).to.equal(null);
    expect(String.oneOf(['1', '2'])('2')).to.equal(null);
  });

  it('should fail', function () {
    expect((String.type())(12)).not.to.equal(null);
    expect((String.min(2))('1')).not.to.equal(null);
    expect((String.max(0))('1')).not.to.equal(null);
    expect((String.len(2))('1')).not.to.equal(null);
    expect((String.required())()).not.to.equal(null);

    expect((String.fn(function (value) {
      return value === '1233';
    }))('1234')).not.to.equal(null);

    expect(String.oneOf(['1', '2'])('3')).not.to.equal(null);
  });


});