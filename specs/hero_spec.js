var Hero = require('../hero');
var Food = require('../food');
var assert = require("assert");



describe("Hero", function() {

  var hero1;
  var food1;
  var food2;

  beforeEach(function() {
   hero1 = new Hero('Ric Flair', 'Raw Steak');
   food1 = new Food('Raw Steak', 10);
   food2 = new Food('Garlic Bread', 5);
  });

  it("should have name", function() {
    assert.equal('Ric Flair', hero1.name);
  });

  it("should have fave food", function() {
    assert.equal('Raw Steak', hero1.faveFood);
  });

  it("should have health", function() {
    assert.equal(50, hero1.health);
  });

  it("can say name", function() {
    assert.equal('I am Ric Flair.', hero1.talk());
  });

  it("can eat fav food and gain health", function() {
    hero1.eat(food1);
    assert.equal(65, hero1.health);
  });

  it("can eat other food and gain health", function() {
    hero1.eat(food2);
    assert.equal(55
      , hero1.health);
  });

});