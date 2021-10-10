const removeFromArray = function (numbers, ...del) {
  del.forEach((element) => {
    if (numbers.indexOf(element) == -1) {
      return;
    }
    numbers.splice(numbers.indexOf(element), 1);
  });

  return numbers;
};
// Do not edit below this line
module.exports = removeFromArray;
