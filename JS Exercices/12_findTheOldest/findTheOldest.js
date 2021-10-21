const currentYear = new Date().getFullYear();

const findTheOldest = function (array) {
  return array.reduce((oldest, next) => {
    let oldestAge = stillAlive(oldest);
    let nextAge = stillAlive(next);
    return oldestAge > nextAge ? oldest : next;
  });
};

const stillAlive = function (person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return currentYear - person.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
