import * as fs from 'fs-extra';
import findUp from 'find-up';
import parseJson from 'parse-json';
import normalizePackageData from 'normalize-package-data';

export default async function getRepoInfo() {
  const pkgPath = findUp.sync('package.json', { cwd: process.cwd() });

  const json = parseJson(await fs.readFile(pkgPath, 'utf8'));

  normalizePackageData(json);

  console.log('pkgJson', json);
}