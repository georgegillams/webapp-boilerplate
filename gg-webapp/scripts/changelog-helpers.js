/* eslint-disable no-console */
// import { writeFile, unlinkSync } from 'fs';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

import { yellow } from './colors';

const getVersionRc = () => {
  const versionRcFile = './.versionrc.json';
  const versionRcFileContent = readFileSync(versionRcFile, {
    encoding: 'utf8',
  });
  return JSON.parse(versionRcFileContent);
};

const versionRcDefaultType = changeType => ({
  type: changeType,
  section: changeType,
  hidden: false,
});

const getMatchingType = (versionRc, changeType) => {
  if (!versionRc || !versionRc.types) {
    return versionRcDefaultType(changeType);
  }
  const matchingType = versionRc.types.filter(t => t.type === changeType);
  if (matchingType.length === 1) {
    return matchingType[0];
  }
  return versionRcDefaultType(changeType);
};

const isChangeTypeHidden = (versionRc, changeType) => !!getMatchingType(versionRc, changeType).hidden;

const titleForChangeType = (versionRc, changeType) => getMatchingType(versionRc, changeType).section;

// Matches format:
// commitHash changeType(category): message
const COMMIT_REGEX = /([a-z0-9]+) ([a-zA-Z ]+)(\(.+\))?: (.+)/gm;

const getLastTagOnCurrentBranch = () => execSync('git describe --abbrev=0 --tags').toString().split('\n')[0];

const parseCommit = commit => {
  // Reset the regex each time we use it:
  COMMIT_REGEX.lastIndex = 0;
  const splitCommit = RegExp(COMMIT_REGEX).exec(commit);
  if (!splitCommit) {
    console.log(yellow(`Including invalid commit message as patch: ${commit}`));
    return {
      changeType: 'fix',
      message: commit,
    };
  }
  const changeType = splitCommit[2];
  const category = splitCommit[3];
  let message = splitCommit[4];
  if (category) {
    message = `${category} - ${message}`;
  }
  return { changeType, message };
};

const getChangesData = () => {
  const changes = {};
  const lastTag = getLastTagOnCurrentBranch();
  const commits = execSync(`git log ${lastTag}..HEAD --oneline`)
    .toString()
    .split('\n')
    .filter(s => s !== '');
  commits.forEach(commit => {
    const { changeType, message } = parseCommit(commit);

    if (!changes[changeType]) {
      changes[changeType] = [];
    }
    changes[changeType].push(message);
  });
  return changes;
};

const getSemverBumpFromChanges = changes => {
  let semverBump = 'patch';
  Object.keys(changes).forEach(changeType => {
    if (changeType === 'feat') {
      semverBump = 'minor';
    } else if (changeType === 'BREAKING CHANGE') {
      semverBump = 'major';
    }
  });
  return semverBump;
};

const generateMarkdown = (versionRc, newVersion, changes) => {
  let result = `## ${newVersion}\n\n`;
  Object.keys(changes)
    .filter(changeType => !isChangeTypeHidden(versionRc, changeType))
    .forEach(changeType => {
      result += `### ${titleForChangeType(versionRc, changeType)}\n\n`;
      changes[changeType].forEach(message => {
        result += `- ${message}\n`;
      });
      result += '\n';
    });
  return result;
};

const addToChangelog = newEntries => {
  const changelogFile = './CHANGELOG.md';
  const changelogContent = readFileSync(changelogFile, { encoding: 'utf8' });
  const changelogTitle = `# Changelog\n\n`;
  const currentChanges = changelogContent.split(changelogTitle)[1];
  const output = `${changelogTitle}${newEntries}${currentChanges}`;
  writeFileSync(changelogFile, output, { encoding: 'utf8' });
};

export { getVersionRc, getChangesData, getSemverBumpFromChanges, generateMarkdown, addToChangelog };
