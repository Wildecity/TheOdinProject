const palindromes = function (string) {
  reversed = "";
  for (i = string.length - 1; i >= 0; i--) {
    reversed += string[i].toLowerCase();
  }
  if (
    reversed.replace(/[^a-zA-Z]/g, "") ==
    string.toLowerCase().replace(/[^a-zA-Z]/g, "")
  ) {
    return true;
  } else return false;
};
palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
