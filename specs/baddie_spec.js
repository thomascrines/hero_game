var Baddie = require('../baddie');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require("assert");

describe("Hero", function() {

  var baddie1;
  var food1;
  var food2;
  var rat1;

  beforeEach(function() {
   baddie1 = new Baddie('Some Guy', 'Eggs Benedict');
   food1 = new Food('Raw Steak', 10);
   food2 = new Food('Eggs Benedict', 15);
   rat1 = new Rat('Macho King Randy Savage');
  });

  it("should have name", function() {
    assert.equal('Some Guy', baddie1.name);
  });

  it("should have fave food", function() {
    assert.equal('Eggs Benedict', baddie1.faveFood);
  });

  it("should have health", function() {
    assert.equal(-50, baddie1.health);
  });

  it("can say name", function() {
    assert.equal('I am Some Guy.', baddie1.talk());
  });

  it("can eat unpoisoned fav food and lose health", function() {
    baddie1.eat(food2);
    assert.equal(-27.5, baddie1.health);
  });

  it("can eat other unpoisoned food and lose health", function() {
    baddie1.eat(food1);
    assert.equal(-40, baddie1.health);
  });

  it('gains health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(-60, baddie1.health);
  });

  it('cant go over -100', function() {
    baddie1.health = -99;
    rat1.getSick();
    rat1.contaminate(food1);
    assert.equal(false, baddie1.foodWontPutBaddieOverMinus100(food1));
  });

  it('cant go under -1', function() {
    baddie1.health = -6;
    assert.equal(false, baddie1.foodWontPutBaddieUnderMinus1(food1));
  });

  it('gains health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(-60, baddie1.health);
  });

  it('cant go over 100 2', function() {
    baddie1.health = -99;
    rat1.getSick();
    rat1.contaminate(food1);
    baddie1.eat(food1);
    assert.equal(-100, baddie1.health);
  });

  it('dies if health is 0', function() {
    baddie1.health = -22.5;
    baddie1.eat(food2);
    assert.equal(0, baddie1.health);
    assert.equal(false, baddie1.isAlive);
  })

});