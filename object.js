var student = {
  name: 'dwi',
  gpa: 4.0,
  isGraduated: true,
  skills: ['js', 'c', 'python', 'java'],
  profile: {
    address: 'palembang',
    city: 'palembang',
  },
  'able to code': 'yes',
  100: 1,

  mentionName: function () {
    console.log('My name is ' + this.name);
  },
  mentionSkills: function () {
    console.log('My skills are : ');
    for (var i = 0; i < this.skills.length; i++) {
      console.log(i + 1 + '. ' + this.skills[i]);
    }
  },
};

console.log(student.name);
console.log(student.gpa);
console.log(student['isGraduated']);
console.log(student['able to code']);
console.log(student['100']);
console.log(student.skills);
console.log(student.profile.address);
console.log(student.profile.city);

// student.mentionName();
// student.mentionSkills();

for (var key in student) {
  console.log(key + ': ' + student[key]);
}

// lanjutkan

// var caca = {
//   name: 'caca',
//   weight: 45,
//   height: 156,
//   hobbies: ['nonton', 'makan', 'belanja'],

//   sebutkanHobby: function () {
//     console.log('Hobby Caca: ');
//     for (var i = 0; i < this.hobbies.length; i++) {
//       console.log(i + 1 + '. ' + this.hobbies[i]);
//     }
//   },
// };

// caca.sebutkanHobby();

// var kata = 'buka puasa bersama teman kuliah';

// var vokal = {
//   a: function () {
//     console.log('berjumlah: ');
//     for (var i = 0; i < this.kata.length; i++) {
//       console.log(this.kata.charAt[i]);
//     }
//   },
// };
// vokal.a();

// function countVomels(str) {
//   var result = {
//     a: 0,
//     i: 0,
//     u: 0,
//     e: 0,
//     o: 0,
//   };

//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === 'a') {
//       result.a++;
//     } else if (str[i] === 'i') {
//       result.i++;
//     } else if (str[i] === 'u') {
//       result.u++;
//     } else if (str[i] === 'e') {
//       result.e++;
//     } else if (str[i] === 'o') {
//       result.o++;
//     }
//   }
//   return result;
// }

// console.log(countVomels('Buka puasa bersama teman kuliah'));

// function countVotes(votes) {
//   var result = {
//     dwi: 0,
//     keiza: 0,
//     malika: 0,
//   };
//   for (var i = 0; i < votes.length; i++) {
//     if (votes[i] === 'dwi') {
//       result.dwi++;
//     } else if (votes[i] === 'keiza') {
//       result.keiza++;
//     } else if (votes[i] === 'malika') {
//       result.malika++;
//     }
//   }
//   return result;
// }

// function voteWin(votes) {
//   var voteCounts = countVotes(votes);

//   var winner = '';
//   var winnerScore = 0;

//   for (var key in voteCounts) {
//     if (voteCounts[key] > winnerScore) {
//       winnerScore = voteCounts[key];
//       winner = key;
//     }
//   }
//   return winner + ' menang dengan ' + winnerScore + ' suara.';
// }
// console.log(voteWin(['dwi', 'dwi', 'keiza', 'malika']));

// var items = [
//   {
//     id: 1,
//     name: 'asus',
//     price: 15000000,
//     stock: 10,
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: 'dell',
//     price: 10000000,
//     stock: 10,
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     name: 'acer',
//     price: 5000000,
//     stock: 10,
//     isAvailable: true,
//   },
// ];

// function itemsList() {
//   console.log('item list: ');
//   for (var i = 0; i < items.length; i++) {
//     console.log(items[i].id + '. ' + items[i].name);
//   }
// }

// function addItem(name, price, stock) {
//   var id = items[items.length - 1].id + 1;
//   var isAvailable = true;

//   var tempObj = {
//     id,
//     name,
//     price,
//     stock,
//     isAvailable,
//   };

//   items.push(tempObj);
// }

// addItem('lenovo', 2000000, 5);
// addItem('dell', 21000000, 25);
// itemsList();
