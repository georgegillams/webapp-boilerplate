/* eslint-disable no-console */
import { writeFileSync } from 'fs';
import { execSync } from 'child_process';

import { inc } from 'semver';

import packageData, { version } from '../package.json';

import { blue, yellow } from './colors';

console.log('Starting release');
console.log('');

const getBumpType = () => {
  if (process.argv.includes('--alpha')) {
    return 'alpha';
  }
  if (process.argv.includes('--major')) {
    return 'major';
  }
  if (process.argv.includes('--minor')) {
    return 'minor';
  }
  if (process.argv.includes('--patch')) {
    return 'patch';
  }

  console.warn(yellow(`No release type specified. Defaulting to patch.`));
  return 'patch';
};

const updatePackageFile = newVersion => {
  const newPackageData = JSON.parse(JSON.stringify(packageData));
  newPackageData.version = newVersion;
  const fileContent = `${JSON.stringify(newPackageData, null, 2)}\n`;
  writeFileSync('package.json', fileContent, 'utf8');
  execSync('cp package.json ./dist/');
  execSync('cp ../README.md ./dist/');
  console.log(blue('package.json updated'));
};

const createTag = newVersion => {
  execSync(`git tag ${newVersion} && git push --tags`);
  console.log(blue('Release tagged'));
};

const commitChanges = newVersion => {
  execSync(`git add .`);
  execSync(`git commit -m "Publish ${newVersion}"`);
  execSync(`git push`);
  console.log(blue('Code pushed'));
};

const publishPackage = () => {
  execSync(`(cd dist && npm publish --access public)`);
  console.log(blue('Package published'));
};

const getCurrentPublishedVersion = () => execSync(`npm view @george-gillams/webapp version`).toString().split('\n')[0];

const bumpType = getBumpType();
const currentVersion = version;
const currentVersionPublished = getCurrentPublishedVersion();
if (currentVersion !== currentVersionPublished) {
  console.warn(
    yellow(`Published version (${currentVersionPublished}) does not match package.json version (${currentVersion})`)
  );
}
let newVersion = currentVersion;
if (bumpType === 'alpha') {
  newVersion = `${currentVersion}-alpha`;
} else {
  newVersion = inc(currentVersion, bumpType);
}
console.log(`Publishing version ${newVersion}`);

updatePackageFile(newVersion);
createTag(newVersion);
commitChanges(newVersion);
publishPackage();
console.log('Done');
