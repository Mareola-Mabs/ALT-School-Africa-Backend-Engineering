const os = require('os')

// Get the current user's details
const userInfo = os.userInfo();
console.log('User Info:', userInfo);

console.log(userInfo.username);



// Get the Hostname
console.log(os.hostname())

// Get the current platform
console.log(os.platform())

// Get the system architecture
console.log(os.arch())

// Get the End of the line character
console.log(os.EOL)


// Get the current available memory
console.log(os.totalmem(), 'bytes total')
console.log(os.freemem(), 'bytes free')


// Get the system uptime
console.log(os.uptime(), 'seconds')

// Get the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);


// Get the system load average
const loadAverage = os.loadavg();
console.log('Load Average:', loadAverage);

// Get the temporary directory
console.log('Temporary Directory:', os.tmpdir());

// Get the CPu information
console.log('CPU Information:', os.cpus());

