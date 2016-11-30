var Rat = require('../rat');
var Food = require('../food');
var assert = require("assert");


describe("Rat", function() {

  var rat1;
  var rat2;
  var food1;
  var food2;

  beforeEach(function() {
   rat1 = new Rat('Macho King Randy Savage');
   rat2 = new Rat('Brutus the Barber Beefcake');
   food1 = new Food('Raw Steak', 10);
   food2 = new Food('Garlic Bread', 5);
  });

  it("should have name", function() {
    assert.equal('Macho King Randy Savage', rat1.name);
  });
    });