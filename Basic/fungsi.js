// // function
// function hello() {
//   console.log('Selamat pagi');
// }
// // function di jalankan setelah d panggil
// hello();

// function dalam kurung bisa di isi variabel
// function hello(n) {
//   console.log('Selamat pagi' + n);
// }
// // function di jalankan setelah d panggil
// hello('Selaamat pagi peserta');

// mencetak bilangan ganjil apa genap
// function bilangan(g) {
//   if (g % 2 === 0) {
//     console.log('Hari ini berlaku/khusus untuk plat no Genap');
//   } else {
//     console.log('Hari ini berlaku/khusus untuk plat no Ganjil');
//   }
// }

// bilangan(1304);

// function splitToArray(stringnya) {
//   var temparray = stringnya.split(' ');
//   return temparray;
// }
// function jmlKata(kalimatnya) {
//   var hasilspilt = splitToArray(kalimatnya);
//   var arrayLength = hasilspilt.length;
//   return arrayLength;
// }
// console.log(jmlKata('selamat siang kawan ku semua'));
var memory = [0];

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}
function modulus(a, b) {
  return a % b;
}
function calculatorUtama(a, b, operasi) {
  var hasil;
  switch (operasi) {
    case '*':
      hasil = kali(a, b);
      break;
    case '/':
      hasil = bagi(a, b);
      break;
    case '+':
      hasil = tambah(a, b);
      break;
    case '-':
      hasil = kurang(a, b);
      break;
    case '%':
      hasil = modulus(a, b);
      break;

    default:
      hasil = 0;
  }
  return hasil;
}

// var result = calculatorUtama(4, 4, 'bagi');
var result = calculatorUtama(9, 4, '%');
memory.push(result);

console.log(result);
console.log(memory);

// function segitiga(a, t) {
//   return a * t * 0.5;
// }
// function persegi(a, t) {
//   return a * t;
// }
// function lingkaran(a, t) {
//   return a * t * 3.14;
// }

// function luasBangun(a, t, bangun) {
//   var hasil;
//   switch (bangun) {
//     case 'segi':
//       hasil = segitiga(a, t);
//       break;
//     case 'kotak':
//       hasil = persegi(a, t);
//       break;
//     case 'bulat':
//       hasil = lingkaran(a, t);
//       break;
//     default:
//       hasil = 'belum ada';
//       break;
//   }
//   return hasil;
// }

// var hasilLuas = luasBangun(2, 2, 'bulat');
// console.log(hasilLuas);
