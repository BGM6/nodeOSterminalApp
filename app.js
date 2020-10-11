const inquirer = require('inquirer');
const os = require('os');

const runSearch = () => {
  inquirer.
    prompt({
      name: 'userChoice',
      type: 'list',
      message: 'Choose an option',
      choices: ['Cpu info', 'Network interfaces', 'Total memory', 'User info', 'Exit']
    }).then((answer) => {
      switch (answer.userChoice) {
        case 'Cpu info':
          cpuInfo();
          break;
        case 'Network interfaces':
          networkInfo();
          break;
        case 'Total memory':
          totalMemory();
          break;
        case 'User info':
          userInfo();
          break;
        case 'Exit':
          break;
        default:


      }
    })
};

// model, speed, times { user, nice, sys, idel, irq}

// Cpu info
const cpuInfo = () => {
  const cpus = os.cpus();
  for (cpu of cpus) {
    console.table(cpu);
  }
  runSearch();
}

// Network info
const networkInfo = () => {
  const network = os.networkInterfaces();
  console.log(network);
  runSearch();
}
// Total memory
const totalMemory = () => {
  const memory = os.totalmem();
  console.log(`${memory} bytes`)
  runSearch();
}

// User info
const userInfo = () => {
  const info = os.userInfo();
  console.table(info);
  runSearch();
}



runSearch();

