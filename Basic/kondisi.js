// var angka = 1;
// if (angka == 2) {
//   console.log('angka 1');
// } else {
//   console.log('angka selain 1');
// }

// var angka = 1;
// if (angka == 2 || angka == 1) {
//   console.log('angka 1');
// } else {
//   console.log('angka selain 1');
// }

// kondisi 2
// var umur = 17;
// if (umur >= 17) {
//   console.log('Bisa bikin KTP');
// } else {
//   console.log('Belum bisa bikin KTP');
// }

// var minum = 'susu';
// switch (minum) {
//   case 'kopi':
//     console.log('anda pilih kopi');
//     break;
//   case 'teh':
//     console.log('anda pilih teh');
//     break;
//   default:
//     console.log('tidak haus');
// }

// var umur = 16;
// var tinggi = 150;

// if (umur < 17) {
//   if (tinggi < 150) {
//     console.log('Tidak boleh masuk');
//   } else if ((tinggi = 150)) {
//     console.log('Boleh masuk');
//   } else {
//     console.log('Tidak Boleh');
//   }
// } else {
//   console.log('boleh masuk');
// }

// var power = 71;

// if (power > 100) {
//   console.log('Expert');
// } else if (power > 70 && power <= 100) {
//   console.log('Pro');
// } else if (power > 50 && power <= 70) {
//   console.log('Normal');
// } else if (power > 30 && power <= 50) {
//   console.log('Basic');
// } else {
//   console.log('Beginner');
// }

// var minuman = 'sus';
// switch (minuman) {
//   case ' ':
//     console.log('input minuman');
//     break;
//   case 'Sweet Tea':
//     console.log('You Choose Sweat Tea, Thanks');
//     break;
//   case 'Plain Tea':
//     console.log('You Choose Plain Tea, Thanks');
//     break;
//   case 'Boba':
//     console.log('You Choose Boba, Thanks');
//     break;
//   case 'Milk Coffee':
//     console.log('You Choose Milk Coffee, Thanks');
//     break;
//   case 'Choco Ice':
//     console.log('You Choose Choco Ice, Thanks');
//     break;

//   default:
//     if (minuman === ' ') {
//       console.log('input minuman');
//     } else {
//       console.log('minuman is not defined');
//     }
// }

var pembelian = 40000;
var coupon = 'Free15%';

switch (coupon) {
  case 'FreeOngkir':
    // ......
    if (pembelian >= 50000) {
      console.log('Pembelian = ' + pembelian);
      console.log('Potongan 10% sebesar =' + pembelian * 0.1);
      console.log('yang harus dibayar =' + (pembelian - pembelian * 0.1));
    } else if (pembelian >= 30000 && pembelian < 50000) {
      console.log('Pembelian = ' + pembelian);
      console.log('Potongan 5% sebesar =' + pembelian * 0.05);
      console.log('yang harus dibayar =' + (pembelian - pembelian * 0.05));
    } else if (pembelian < 30000) {
      console.log('Pembelian = ' + pembelian);
      console.log('Potongan 2.5% sebesar =' + pembelian * 0.025);
      console.log('yang harus dibayar =' + (pembelian - pembelian * 0.025));
    }
    break;
  case 'Free15%':
    // .....
    if (pembelian >= 30000) {
      console.log('Pembelian = ' + pembelian);
      console.log('Potongan 15% sebesar =' + pembelian * 0.15);
      console.log('yang harus dibayar =' + (pembelian - pembelian * 0.15));
    } else {
      console.log('tidak ada potongan');
    }
    break;

  default:
    console.log('tidak ada coupon');
    break;
}
