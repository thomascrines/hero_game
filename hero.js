var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 50;
  this.faveFood = faveFood;
  this.isAlive = true;
  };


  Hero.prototype = {
    talk: function() {
      return("I am " + this.name + ".");
    },

    foodWontPutHeroOver100: function(food) {
      if ((this.health + food.value) <= 100) {
        return true;
      } else {
        return false;
      }
    },

    foodWontPutHeroUnder1: function(food) {
      if ((this.health + food.value) >= 1)  {
        return true;
      } else {
        return false;
      }
    },

    faveFoodCheck: function(food) {
      if (food.name === this.faveFood) {
        return true;
      }
    },

    eat: function(food) {
      if (this.faveFoodCheck(food)) {
        food.value *= 1.5;
      };
      if ((this.foodWontPutHeroOver100(food)) && (this.foodWontPutHeroUnder1(food))) {
        this.health += food.value;
      } else if (this.foodWontPutHeroOver100(food) === false) {
        this.health = 100;
      }  else { 
        this.health = 0;
        this.isAlive = false;
      }
    }
  };

module.exports = Hero;