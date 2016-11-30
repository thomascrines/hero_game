var Baddie = function(name, faveFood, superpower) {
  this.name = name;
  this.health = -50;
  this.faveFood = faveFood;
  this.superpower = superpower;
  this.isAlive = true;
  };

  Baddie.prototype = {
    talk: function() {
      return("I am " + this.name + ".");
    },

      foodWontPutBaddieOverMinus100: function(food) {
        if ((this.health + food.value) >= -100) {
          return true;
        } else {
          return false;
        }
      },

      foodWontPutBaddieUnderMinus1: function(food) {
        if ((this.health + food.value) < 0)  {
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
        if ((this.foodWontPutBaddieOverMinus100(food)) && (this.foodWontPutBaddieUnderMinus1(food))) {
          this.health += food.value;
        } else if (this.foodWontPutBaddieOverMinus100(food) === false) {
          this.health = -100;
        }  else { 
          this.health = 0;
          this.isAlive = false;
        }
      },

      punch: function(hero) {
        hero.health -= 5;
      },

      kick: function(hero) {
        hero.health -= 10;
      },

      useSuperpower: function(hero) {
        hero.health -= this.superpower.strength;
      }
    };

    module.exports = Baddie;