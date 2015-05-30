'use strict';

'use strict';
require('./../lib');

const expect = require('chai').expect;


describe('Number tests', function () {

  it('should pass required', function () {
    let validate = Number.required();
    expect(validate(3).success).to.be.ok;
  });

  it('should fail required', function () {
    let validate = Number.required();
    expect(validate().success).not.to.be.ok;
  });

  it('should pass type', function () {
    let validate;

    validate = Number.type();
    expect(validate(3).success).to.be.ok;
  });

  it('should fail type', function () {
    let validate;

    validate = Number.type();
    expect(validate('asd').success).not.to.be.ok;
  });

  it('should pass min', function () {
    let validate;

    validate = Number.min(3);
    expect(validate(3).success).to.be.ok;
  });

  it('should fail min', function () {
    let validate;

    validate = Number.min(3);
    expect(validate(2).success).not.to.be.ok;
  });

  it('should pass max', function () {
    let validate;

    validate = Number.max(3);
    expect(validate(3).success).to.be.ok;
  });

  it('should fail max', function () {
    let validate;

    validate = Number.max(3);
    expect(validate(4).success).not.to.be.ok;
  });

  it('should pass oneOf', function () {
    let validate;

    validate = Number.required().oneOf([1,2,3,4]);
    expect(validate(3).success).to.be.ok;

    validate = Number.required().oneOf([1,2,3,4]);
    expect(validate(4).success).to.be.ok;
  });

  it('should fail oneOf', function () {
    let validate;

    validate = Number.required().oneOf([1,2,3,4]);
    expect(validate(5).success).not.to.be.ok;

    validate = Number.oneOf([1,2,3,4]);
    expect(validate(10).success).not.to.be.ok;
  });

});