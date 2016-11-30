var Hero = require('../hero');
var assert = require("assert");


describe("Hero", function() {

  var hero1;

  beforeEach(function() {
   hero1 = new Hero('Ric Flair', 'Raw Steak');
  });

  it("should have name", function() {
    assert.equal('Ric Flair', hero1.name);
  });

  it("should have fave food", function() {
    assert.equal('Raw Steak', hero1.faveFood);
  });

  it("should have health", function() {
    assert.equal(100, hero1.health);
  });

  it("can say name", function() {
    assert.equal('I am Ric Flair.', hero1.talk());
  });

});