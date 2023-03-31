// var scores = [100, 50, 75];
// console.log(scores[0], scores[1], scores[2]);
// console.log(scores.length);

// var items = ['komputer', 'hp'];
// console.log(items);
// items.push('mouse');
// console.log(items);

var murid = [
  [1, 'Vincent', 3.5],
  [2, 'Udin', 3.0],
  [3, 'Mamang', 2.1],
];

// var ipk = 3.0;
// // metode 1
// console.log(murid[0][0] + ', IPK =' + murid[0][1], murid[0][2] > 3 ? 'Lulus' : 'gagal');

// // metode 2
// if (murid[0][2] > 3) {
//   console.log(murid[0][1] + ' IPK =' + murid[0][2] + 'Lulus');
// } else {
//   console.log(murid[0][1] + ' IPK =' + murid[0][2] + 'Gagal');
// }
// if (murid[0][2] > 3) {
//   console.log(murid[1][1] + ' IPK =' + murid[1][2] + 'Lulus');
// } else {
//   console.log(murid[1][1] + ' IPK =' + murid[1][2] + 'Gagal');
// }

// metode 3 (efektif 1)
for (i = 0; i < murid.length; i++) {
  console.log(murid[i][0] + '. ' + murid[i][1] + ' IPK = ' + murid[i][2], murid[i][2] >= 3 ? ' Lulus' : ' Gagal');
}

// metode efektif 2
for (i = 0; i < murid.length; i++)
  if (murid[0][2] >= 3) {
    console.log([i] + '. ' + murid[i][1] + ' IPK =' + murid[i][2] + 'Lulus');
  } else {
    console.log([i] + '. ' + murid[i][1] + ' IPK =' + murid[i][2] + 'Gagal');
  }

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const children = arr1.concat(arr2);
