var Player = require('../player');
var Hero = require('../hero');
var Baddie = require('../baddie');
var assert = require("assert");

describe("Player", function() {

  var hero1;
  var baddie1;
  var player1;
  var player2

  beforeEach(function() {
    hero1 = new Hero('Ric Flair', 'Raw Steak');
    baddie1 = new Baddie('Hulk Hogan', 'Eggs Benedict');
    player1 = new Player('Someone', hero1);
    player2 = new Player('Someone else', baddie1);
  });

  it("should have name", function() {
    assert.equal('Someone', player1.name);
    assert.equal('Someone else', player2.name);
  });

  it("should have character", function() {
    assert.equal('Ric Flair', player1.character.name);
    assert.equal('Hulk Hogan', player2.character.name);
  });
});