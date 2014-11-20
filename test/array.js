/**
 * Created by Andrius Skerla on 19/11/14.
 * mailto: andrius@skerla.com
 */
var chai = require('chai');
var expect = chai.expect;
chai.should();

require('./../lib/index');

describe('Array', function () {

  it('should pass', function () {
    expect((Array.type())([])).to.equal(null);
    expect((Array.min(3))([1, 2, 3])).to.equal(null);
    expect((Array.max(3))([1, 2, 3])).to.equal(null);
    expect((Array.len(3))([1, 2, 3])).to.equal(null);
    expect((Array.oneOf([1, 2, 3]))([1, 2, 3])).to.equal(null);
  });

  it('should fail pass', function () {
    expect((Array.type())({})).not.to.equal(null);
    expect((Array.min(3))([1, 2])).not.to.equal(null);
    expect((Array.max(3))([1, 2, 3, 4])).not.to.equal(null);
    expect((Array.len(3))([1, 2])).not.to.equal(null);
    expect((Array.oneOf([1, 2, 3]))([1, 2, 3, 4])).not.to.equal(null);
  });


});