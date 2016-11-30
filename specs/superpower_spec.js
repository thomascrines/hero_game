var Superpower = require('../superpower');
var assert = require("assert");

describe("superpower", function() {

  var superpower;

  beforeEach(function() {
   superpower = new Superpower('The Figure Four', 10);
  });

  it("has name", function() {
    assert.equal('The Figure Four', superpower.name);
  });

  it("has strength", function() {
    assert.equal(10, superpower.strength);
  });

});