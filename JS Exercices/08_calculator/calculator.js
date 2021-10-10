const add = function (...nums) {
  let result = 0;
  nums.forEach((element) => {
    result += element;
  });
  return result;
};

const subtract = function (...nums) {
  result = nums[0];
  nums.forEach((element) => {
    result -= element;
  });
  result += nums[0];
  return result;
};

const sum = function (nums) {
  let result = 0;
  nums.forEach((element) => {
    result += element;
  });
  return result;
};

const multiply = function (nums) {
  result = nums[0];
  nums.slice(1).forEach((element) => {
    result *= element;
  });
  return result;
};

const power = function (num, power) {
  let result = num;
  for (i = 2; i <= power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;

  let result = num;
  for (i = num; i > 1; i--) {
    result *= i - 1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
