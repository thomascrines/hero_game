var Rat = function(name) {
  this.name = name,
  this.isPoisonous = false,
  this.isAlive = true
};

Rat.prototype = {
  getSick: function() {
    this.isPoisonous = true;
  },
  contaminate: function(food) {
    if (this.isPoisonous === true) {
    food.poisonous = true;
    food.value = -food.value;
  } 
  }
}

module.exports = Rat;