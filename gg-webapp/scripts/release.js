/* eslint-disable no-console */
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';

import { inc } from 'semver';

import packageData, { version } from '../package.json';

import {
  getVersionRc,
  getChangesData,
  getSemverBumpFromChanges,
  generateMarkdown,
  addToChangelog,
} from './changelog-helpers.js';
import { blue, yellow } from './colors';

console.log('Starting release');
console.log('');

const debug = process.argv.includes('--debug');

const updatePackageFile = newVersion => {
  const newPackageData = JSON.parse(JSON.stringify(packageData));
  newPackageData.version = newVersion;
  const fileContent = `${JSON.stringify(newPackageData, null, 2)}\n`;
  writeFileSync('package.json', fileContent, 'utf8');
  execSync('cp package.json ./dist/');
  execSync('cp README.md ./dist/');
  console.log(blue('package.json updated'));
};

const createTag = newVersion => {
  const commands = [`git tag ${newVersion} && git push --tags`];

  if (debug) {
    commands.forEach(c => console.log(blue(c)));
  } else {
    commands.forEach(execSync);
  }

  console.log(blue('Release tagged'));
};

const commitChanges = newVersion => {
  const commands = [`git add .`, `git commit -m "[skip ci] Publish ${newVersion}"`, `git push`];

  if (debug) {
    commands.forEach(c => console.log(blue(c)));
  } else {
    commands.forEach(execSync);
  }

  console.log(blue('Code pushed'));
};

const publishPackage = () => {
  const commands = [`(cd dist && npm publish --access public)`];

  if (debug) {
    commands.forEach(c => console.log(blue(c)));
  } else {
    commands.forEach(execSync);
  }

  console.log(blue('Package published'));
};

const getCurrentPublishedVersion = () => {
  try {
    return execSync(`npm view @george-gillams/webapp version`).toString().split('\n')[0];
  } catch (error) {
    return '0.0.0';
  }
};

const changeData = getChangesData();

let semverBump = getSemverBumpFromChanges(changeData);
if (process.argv.includes('--alpha')) {
  semverBump = 'alpha';
}
console.log(`semverBump`, semverBump);

const currentVersion = version;
const currentVersionPublished = getCurrentPublishedVersion();
if (currentVersion !== currentVersionPublished) {
  console.warn(
    yellow(`Published version (${currentVersionPublished}) does not match package.json version (${currentVersion})`)
  );
}
let newVersion = currentVersion;
if (semverBump === 'alpha') {
  newVersion = `${currentVersion}-alpha`;
} else {
  newVersion = inc(currentVersion, semverBump);
}
console.log(`Publishing version ${newVersion}`);

const versionRc = getVersionRc();

updatePackageFile(newVersion);
const changelogMarkdown = generateMarkdown(versionRc, newVersion, changeData);
addToChangelog(changelogMarkdown);
commitChanges(newVersion);
createTag(newVersion);
publishPackage();
console.log('Done');
