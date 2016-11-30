var Rat = require('../rat');
var Food = require('../food');
var assert = require("assert");


describe("Rat", function() {

  var rat1;
  var rat2;
  var food1;
  var food2;
  var food3;

  beforeEach(function() {
   rat1 = new Rat('Macho King Randy Savage');
   rat2 = new Rat('Brutus the Barber Beefcake');
   food1 = new Food('Raw Steak', 10);
   food2 = new Food('Garlic Bread', 5);
 });

  it("should have name", function() {
    assert.equal('Macho King Randy Savage', rat1.name);
  });

  it("starts not poisonous", function() {
    assert.equal(false, rat1.isPoisonous);
  });

  it("starts alive", function() {
    assert.equal(true, rat1.isAlive);
  });

  it("can become a harbinger of disease", function() {
    rat1.getSick();
    assert.equal(true, rat1.isPoisonous);
  });

  it("food not affected by healthy rat", function() {
    rat1.contaminate(food1);
    assert.equal(false, food1.poisonous);
  });

  it("food affected by sick rat", function() {
    rat2.getSick();
    rat2.contaminate(food2);
    assert.equal(true, food2.poisonous);
    assert.equal(-5, food2.value);
  });

});