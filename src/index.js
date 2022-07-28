module.exports = function check(str, bracketsConfig) {
  let i = str.length >> 1;
  while ((i > 0) && (str.length > 0)) {
    bracketsConfig.forEach(element => {
      str = str.replace(element[0] + element[1], '');
    });
    i--;
  }
  return !(str.length > 0);
}
