'use strict';

'use strict';
require('./../lib');

const expect = require('chai').expect;


describe('Function tests', function () {

  it('should pass required', function () {
    let validate = Function.required();
    expect(validate({}).success).to.be.ok;
  });

  it('should fail required', function () {
    let validate = Function.required();
    expect(validate().success).not.to.be.ok;
  });

  it('should pass fn', function () {
    let validate = Function.fn(function () {
      return true;
    });
    expect(validate({a:6}).success).to.be.ok;
  });

  it('should fail fn', function () {
    let validate = Function.fn(function () {
      return false;
    });
    expect(validate({a:6}).success).not.to.be.ok;
  });
});