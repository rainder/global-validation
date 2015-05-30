'use strict';

'use strict';
require('./../lib');

const expect = require('chai').expect;


describe('String tests', function () {

  it('should pass required', function () {
    let validate = String.required();
    expect(validate({}).success).to.be.ok;
  });

  it('should fail required', function () {
    let validate = String.required();
    expect(validate().success).not.to.be.ok;
  });

  it('should pass type', function () {
    let validate;

    validate = String.type();
    expect(validate('a').success).to.be.ok;
  });

  it('should fail type', function () {
    let validate;

    validate = String.type();
    expect(validate(3).success).not.to.be.ok;
  });

  it('should pass min', function () {
    let validate;

    validate = String.min(3);
    expect(validate('123').success).to.be.ok;
  });

  it('should fail min', function () {
    let validate;

    validate = String.min(3);
    expect(validate('12').success).not.to.be.ok;
  });

  it('should pass max', function () {
    let validate;

    validate = String.max(3);
    expect(validate('123').success).to.be.ok;
  });

  it('should fail max', function () {
    let validate;

    validate = String.max(3);
    expect(validate('1233').success).not.to.be.ok;
  });

  it('should pass len', function () {
    let validate;

    validate = String.len(3);
    expect(validate('123').success).to.be.ok;
  });

  it('should fail len', function () {
    let validate;

    validate = String.len(3);
    expect(validate('1233').success).not.to.be.ok;
  });

  it('should pass oneOf', function () {
    let validate;

    validate = String.required().oneOf(['a', 'b']);
    expect(validate('a').success).to.be.ok;

    validate = String.required().oneOf(['a', 'b']);
    expect(validate('b').success).to.be.ok;
  });

  it('should fail oneOf', function () {
    let validate;

    validate = String.required().oneOf(['a', 'b']);
    expect(validate('c').success).not.to.be.ok;

    validate = String.oneOf(['a', 'b']);
    expect(validate('c').success).not.to.be.ok;
  });

  it('should pass regexp', function () {
    let validate;

    validate = String.regexp(/^\d+$/);
    expect(validate('123').success).to.be.ok;
  });

  it('should fail regexp', function () {
    let validate;

    validate = String.regexp(/^\d+$/);
    expect(validate('123a').success).not.to.be.ok;
  });


});