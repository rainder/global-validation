'use strict';

'use strict';
require('./../lib');

const expect = require('chai').expect;


describe('Boolean tests', function () {

  it('should pass required', function () {
    let validate = Boolean.required();
    expect(validate({}).success).to.be.ok;
  });

  it('should fail required', function () {
    let validate = Boolean.required();
    expect(validate().success).not.to.be.ok;
  });

  it('should pass type', function () {
    let validate;

    validate = Boolean.type();
    expect(validate(true).success).to.be.ok;
    expect(validate(false).success).to.be.ok;
  });

  it('should fail type', function () {
    let validate;

    validate = Boolean.type();
    expect(validate(3).success).not.to.be.ok;
  });

});