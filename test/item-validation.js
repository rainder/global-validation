/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */
var chai = require('chai');
var expect = chai.expect;
chai.should();

require('./../lib/index');

describe('Single validation', function () {

  it('should pass undefined value as optional', function () {
    var v = String.type();
    expect(v()).to.equal(null);
  });

  it('should check if is defined', function () {
    var v = String.required();
    expect(v()).to.equal('Required')
  });

  it('should fail', function () {
    var v = String.min(2);
    expect(v([1,2,3,4])).to.equal('Expected to be a String')

    var v = String.len(6);

    expect(v('123').isValid).not.to.be.ok;

  });

  it('should override error message', function () {
    String.min.message = 'Min %1, Actual %2';

    var validator = String.min(4);
    expect(validator('112')).to.equal('Min 4, Actual 3');

    delete String.min.message;
    expect(validator('112')).to.equal('Min length');
  });

  it('should use callback for validation', function () {
    var val = null

    var v = String.min(3).fn(function (value) {
      val = value;
    });

    expect(v('123')).to.be.a('null');
    expect(val).to.be.equal('123');
  });

  it('should execute callback in defined context', function () {

    var ctx = {};

    String.fn(function () {
      expect(this).to.be.equal(ctx);
    }).call(ctx, '123');

    String.fn(function (value, value2, value3) {
      expect(this).to.be.equal(ctx);
      expect(value).to.be.equal('999');
      expect(value2).to.be.equal('234');
      expect(value3).to.be.equal(8);
    }).call(ctx, '999', '234', 8);

  });

  it('should fail', function () {
    var v = String.required();
    expect(v(123)).not.to.equals(null);
  });

});