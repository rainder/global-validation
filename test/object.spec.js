'use strict';

'use strict';
require('./../lib');
const myObject = require('./../lib/Object');
const methods = Object.keys(myObject);

const expect = require('chai').expect;


describe('Object tests', function () {

  it('should pass required', function () {
    let validate = Object.required();
    expect(validate({}).success).to.be.equal(true);
  });

  it('should fail required', function () {
    let validate = Object.required();
    expect(validate().success).to.be.equal(false);
  });

  it('should fail required', function () {
    let validate = Object.type();
    expect(validate([]).success).to.be.equal(false);
  });

});