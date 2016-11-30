var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 50;
  this.faveFood = faveFood;
  };


Hero.prototype = {
  talk: function() {
    return("I am " + this.name + ".");
  },
  eat: function(food) {
    if (food.name === this.faveFood ) {
      this.health += (food.value * 1.5);
    } else {
    this.health += food.value;
  }
}
};

module.exports = Hero;