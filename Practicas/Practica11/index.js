const os = require('os');
console.log('Sistema operativo:', os.platform());

const platform = os.platform();
console.log(platform);

const nameOs = os.type();
console.log(nameOs);

const uptimeOs = os.uptime();
console.log(uptimeOs);

const totalMemory = os.totalmem();
console.log(totalMemory/1024)

const cpuCoreLogic = os.cpus();
console.log(cpuCoreLogic);

const networkInterfaces = os.networkInterfaces();;
console.log(networkInterfaces);

const homeDir = os.homedir();
console.log(homeDir);