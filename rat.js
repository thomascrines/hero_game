var Rat = function(name) {
  this.name = name,
  this.isPoisonous = false
};

Rat.prototype = {
  contanimate: function(food) {
    food.poisonous = true;
  }
}

module.exports = Rat;