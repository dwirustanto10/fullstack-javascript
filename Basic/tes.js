function countVowels(str) {
  var result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      result.a++;
    } else if (str[i] === 'i') {
      result.i++;
    } else if (str[i] === 'u') {
      result.u++;
    } else if (str[i] === 'e') {
      result.e++;
    } else if (str[i] === 'o') {
      result.o++;
    }
  }
  return result;
}
console.log(countVowels('Buka puasa bersama teman upt tik'));
// console.log(countVomels('merdeka belajar sebilang'));
function countVomels(str) {
  var result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      result.a++;
    } else if (str[i] === 'i') {
      result.i++;
    } else if (str[i] === 'u') {
      result.u++;
    } else if (str[i] === 'e') {
      result.e++;
    } else if (str[i] === 'o') {
      result.o++;
    }
  }
  return result;
}

console.log(countVomels('Buka puasa bersama teman tik'));
