/* eslint-disable no-console */
import { writeFile, unlinkSync } from 'fs';
import { execSync } from 'child_process';

import sass from 'sass';

import { blue } from './colors';

const auxillaryFiles = ['dist/utils/_tokens.scss'];

const transpile = (file) =>
  new Promise((resolve, reject) => {
    const outputFile = `${file.split('.scss')[0]}.css`;
    sass.render({ file }, (error, result) => {
      /* ... */
      if (error) {
        reject(error);
      }
      console.info(blue(file));
      if (result && result.css) {
        writeFile(outputFile, result.css.toString(), 'utf8', (err2) => {
          if (err2) return reject(err2);
          resolve();
          return null;
        });
      } else {
        resolve();
      }
    });
  });

const deleteFile = (file) => {
  unlinkSync(file);
};

console.log('Transpiling `dist` directory scss files...');
console.log('');

const scssFiles = execSync('find dist -name "*.scss" | grep -v node_modules')
  .toString()
  .split('\n')
  .filter((s) => s !== '');

const componentScssFiles = JSON.parse(JSON.stringify(scssFiles)).filter((f) => {
  let res = true;
  auxillaryFiles.forEach((aF) => {
    if (f === aF) {
      res = false;
    }
  });
  return res;
});

const transpilationTasks = componentScssFiles.map((sF) => transpile(sF));

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

Promise.all(transpilationTasks)
  .then(() => {
    sleep(1000).then(() => {
      scssFiles.forEach((sF) => {
        deleteFile(sF);
      });

      console.log('All good.  👍');
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });