var Food = require('../food');
var assert = require("assert");


describe("Food", function() {

  var food1;

  beforeEach(function() {
   food1 = new Food('Raw Steak', 10);
  });

  it("should have name", function() {
    assert.equal('Raw Steak', food1.name);
  });

  it("should have replenishment value", function() {
    assert.equal( 10, food1.value);
  });

});