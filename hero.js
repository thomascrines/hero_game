var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 100;
  this.faveFood = faveFood;
};

Hero.prototype = {
  talk: function() {
    return("I am " + this.name + ".");
  }
};

module.exports = Hero;