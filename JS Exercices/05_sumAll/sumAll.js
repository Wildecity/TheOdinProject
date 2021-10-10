const sumAll = function (start, finish) {
  result = 0;
  if (
    start < 0 ||
    finish < 0 ||
    typeof start !== "number" ||
    typeof finish !== "number"
  ) {
    return "ERROR";
  }
  if (start < finish) {
    for (i = start; i <= finish; i++) {
      result += i;
    }
    return result;
  } else {
    for (i = finish; i <= start; i++) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
