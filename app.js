const inquirer = require('inquirer');
const os = require('os');

const runSearch = () => {
  inquirer.
    prompt({
      name: 'userChoice',
      type: 'list',
      message: 'Choose an option',
      choices: ['Cpu info', 'Network interfaces', 'Total memory', 'User info', 'OS platform', 'Home directory', 'System uptime', 'Exit']
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

        case 'OS platform':
          osPlatform();
          break;

        case 'Home directory':
          homeDir();
          break;

        case 'System uptime':
          upTime();
          break;

        case 'Exit':
          break;
        default:

      }
    })
};

runSearch();

// Cpu info
const cpuInfo = () => {
  const cpus = os.cpus();
  for (let i = 0; i < cpus.length; i++) {
    console.table(cpus[i]);
    runSearch();
  }
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

const osPlatform = () => {
  const platform = os.platform();
  console.log(platform)
  runSearch();
}

const homeDir = () => {
  const directory = os.homedir();
  console.log(directory);
  runSearch();
}

const upTime = () => {
  const timeInSeconds = os.uptime();
  const timeInMin = timeInSeconds / 60;
  console.log(`${timeInMin} minutes.`);
  runSearch();
}
