'use strict';

'use strict';
require('./../lib');

const expect = require('chai').expect;


describe('Array tests', function () {

  it('should pass required', function () {
    let validate = Array.required();
    expect(validate([]).success).to.be.ok;
  });

  it('should fail required', function () {
    let validate = Array.required();
    expect(validate().success).not.to.be.ok;
  });

  it('should pass type', function () {
    let validate;

    validate = Array.type();
    expect(validate([]).success).to.be.ok;
  });

  it('should fail type', function () {
    let validate;

    validate = Array.type();
    expect(validate(3).success).not.to.be.ok;
  });

  it('should pass min', function () {
    let validate;

    validate = Array.min(3);
    expect(validate([1,2,3]).success).to.be.ok;
  });

  it('should fail min', function () {
    let validate;

    validate = Array.min(3);
    expect(validate([1,2]).success).not.to.be.ok;
  });

  it('should pass max', function () {
    let validate;

    validate = Array.max(3);
    expect(validate([1,2,3]).success).to.be.ok;
  });

  it('should fail max', function () {
    let validate;

    validate = Array.max(3);
    expect(validate([1,2,3,4]).success).not.to.be.ok;
  });

  it('should pass len', function () {
    let validate;

    validate = Array.len(3);
    expect(validate([1,2,3]).success).to.be.ok;
  });

  it('should fail len', function () {
    let validate;

    validate = Array.len(3);
    expect(validate([]).success).not.to.be.ok;
  });

  it('should pass oneOf', function () {
    let validate;

    validate = Array.oneOf(['a', 'b']);
    expect(validate(['a', 'b']).success).to.be.ok;

    validate = Array.required().oneOf(['a', 'b']);
    expect(validate(['a']).success).to.be.ok;
  });

  it('should fail oneOf', function () {
    let validate;

    validate = Array.required().oneOf(['a', 'b']);
    expect(validate(['c']).success).not.to.be.ok;

    validate = Array.oneOf(['a', 'b']);
    expect(validate(['a', 'b', 'c']).success).not.to.be.ok;
  });

  it('should pass typeOf', function () {
    let validate;

    validate = Array.typeOf(String);
    expect(validate(['a', 'b']).success).to.be.ok;

  });

  it('should fail typeOf', function () {
    let validate;

    validate = Array.required().typeOf(String);
    expect(validate(['c', 'b', 'r', 4]).success).not.to.be.ok;
  });

});