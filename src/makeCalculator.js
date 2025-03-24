'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: function (number) {
      result += number;

      return result;
    },
    subtract: function (number) {
      result -= number;

      return result;
    },
    multiply: function (number) {
      result *= number;

      return result;
    },
    divide: function (number) {
      if (number === 0) {
        return null;
      }
      result /= number;

      return result;
    },
    reset: function () {
      result = 0;

      return this;
    },
    operate: function (callback, number) {
      result = callback.call(this, number);

      return this;
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
