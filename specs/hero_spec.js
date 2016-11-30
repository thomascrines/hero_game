var Hero = require('../hero');
var Baddie = require('../baddie');
var Food = require('../food');
var Rat = require('../rat');
var Superpower = require('../superpower');
var assert = require("assert");

describe("Hero", function() {

  var hero1;
  var baddie1;
  var food1;
  var food2;
  var rat1;
  var superpower1;

  beforeEach(function() {
    superpower1 = new Superpower('The Figure Four', 20)
    hero1 = new Hero('Ric Flair', 'Raw Steak', superpower1);
    baddie1 = new Baddie('Some Guy', 'Eggs Benedict');
    food1 = new Food('Raw Steak', 10);
    food2 = new Food('Garlic Bread', 5);
    rat1 = new Rat('Macho King Randy Savage');
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
    assert.equal(55, hero1.health);
  });

  it('loses health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    hero1.eat(food1);
    assert.equal(35, hero1.health);
  });

  it('cant go over 100', function() {
    hero1.health = 99;
    assert.equal(false, hero1.foodWontPutHeroOver100(food2));
  });

  it('cant go under 1', function() {
    hero1.health = 6;
    rat1.getSick();
    rat1.contaminate(food1);
    assert.equal(false, hero1.foodWontPutHeroUnder1(food1));
  });

  it('loses health eating poisoned food', function() {
    rat1.getSick();
    rat1.contaminate(food1);
    hero1.eat(food1);
    assert.equal(35, hero1.health);
  });

  it('cant go over 100 2', function() {
    hero1.health = 99;
    hero1.eat(food1)
    assert.equal(100, hero1.health);
  });

  it('dies if health is 0', function() {
    hero1.health = 14;
    rat1.getSick();
    rat1.contaminate(food1);
    hero1.eat(food1);
    assert.equal(0, hero1.health);
    assert.equal(false, hero1.isAlive);
  });

  it('can punch', function() {
    hero1.punch(baddie1);
    assert.equal(-45, baddie1.health);
  });

  it('can kick', function() {
    hero1.kick(baddie1);
    assert.equal(-40, baddie1.health);
  });

  it('can use superpower', function() {
    hero1.useSuperpower(baddie1);
    assert.equal(-30, baddie1.health);
  });

});