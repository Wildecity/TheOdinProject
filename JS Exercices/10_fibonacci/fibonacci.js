const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  let sequence = [];
  for (let i = 0; i < count; i++) {
    let temp = b + a;
    a = b;
    b = temp;
    sequence.push(a);
  }
  console.log("Sequence is");
  console.table(sequence);
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
