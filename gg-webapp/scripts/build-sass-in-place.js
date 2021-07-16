/* eslint-disable no-console */
import { dirname } from 'path';
import { unlinkSync } from 'fs';
import { exec, execSync } from 'child_process';

import { blue } from './colors';

const auxillaryFiles = ['dist/utils/_tokens.scss'];

const transpile = file =>
  new Promise((resolve, reject) => {
    const outputFile = dirname(file);
    /* eslint-disable max-len */
    const options =
      '--importer=node_modules/node-sass-tilde-importer --include-path=node_modules --include-path=src --output-style compressed';
    /* eslint-enable max-len */
    exec(`npm run node-sass -- ${options} "${file}" --output="${outputFile}"`, error => {
      if (error) {
        reject(error);
        return;
      }
      console.info(blue(file));
      resolve();
    });
  });

const deleteFile = file => {
  unlinkSync(file);
};

console.log('Transpiling `dist` directory scss files...');
console.log('');

const scssFiles = execSync('find dist -name "*.scss" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter(s => s !== '')
  .filter(s => !s.includes('_'));

const componentScssFiles = JSON.parse(JSON.stringify(scssFiles)).filter(f => {
  let res = true;
  auxillaryFiles.forEach(aF => {
    if (f === aF) {
      res = false;
    }
  });
  return res;
});

const transpilationTasks = componentScssFiles.map(sF => transpile(sF));

const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

Promise.all(transpilationTasks)
  .then(() => {
    sleep(1000).then(() => {
      scssFiles.forEach(sF => {
        deleteFile(sF);
      });

      console.log('All good.  👍');
      process.exit(0);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
