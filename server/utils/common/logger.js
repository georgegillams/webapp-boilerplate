/* eslint-disable no-console */

const chalk = require('chalk');
import { ip } from 'ip';

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's output from the server we want to print
  log: (message, ...rest) => {
    console.log(message, ...rest);
  },

  // Called whenever there's an error on the server we want to print
  error: (err, ...rest) => {
    console.error(chalk.red(err), ...rest);
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host) => {
    console.log(`Server started ! ${chalk.green('✓')}`);

    console.log(` 
${chalk.bold('Access URLs:')}${divider} 
Localhost: ${chalk.magenta(`http://${host}:${port}`)} 
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider} 
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)} 
    `);
  },
};

export default logger;
