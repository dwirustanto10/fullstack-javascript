const command = process.argv[2];
const params = process.argv.slice(3);
const WineController = require('./controller/WineController');
// console.log(nodecommand);
// console.log(params);

switch (command) {
  case 'help':
    WineController.help();
    // console.log('help');
    break;
  case 'wines':
    WineController.wines();
    // console.log('wines');
    break;
  case 'add':
    WineController.add(params);
    // console.log('add');
    break;
  case 'sell':
    WineController.sell(params);
    // console.log('sell');
    break;
  case 'rename':
    WineController.rename(params);
    // console.log('rename');
    break;
  case 'findById':
    WineController.findById(params);
    // console.log('findById');
    break;

  default:
    console.log('Msukkan command yang benar');
    break;
}

// FLOW MVC :
/**
 * 1. APLIKASI AKAN MENGAMBIL INPUT DARI TERMINAL
 * 2. index.js ADALAH PROSES PERTAMA
 * 3. DARI CASE-CASE AKAN DI KIRIM KE CONTROLLER
 * 4. DARI CONTROLLER AKAN DI KIRIM KE MODEL
 * 5. DIKEMBALIKAN KE CONTROLLER
 * 6. DI LEMPAR KE VIEW, LEWAT CONTROLLER
 * 7. console.log DILAKUKAN DALAM VIEW
 * */
