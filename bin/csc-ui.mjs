#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const UI_PACKAGE = 'github:rbillyjames0221/csc-ui';
const INIT_COMMAND = 'npx github:rbillyjames0221/csc-ui init';

const [command, name] = process.argv.slice(2);

function readText(file) {
  return readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
}

function findPackageJson(start) {
  let dir = path.resolve(start);
  while (true) {
    const file = path.join(dir, 'package.json');
    if (existsSync(file)) return file;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

function installPackage(pkgPath) {
  const pkg = JSON.parse(readText(pkgPath));
  if (pkg.name === '@csc/ui' || pkg.name === 'csc-design-system') {
    console.error('Run csc-ui inside the app that will use the components, not inside this repository.');
    process.exit(1);
  }
  pkg.dependencies = pkg.dependencies || {};
  pkg.dependencies['@csc/ui'] = UI_PACKAGE;
  for (const peer of ['react', 'react-dom']) {
    const present = pkg.dependencies[peer] || pkg.devDependencies?.[peer] || pkg.peerDependencies?.[peer];
    if (!present) pkg.dependencies[peer] = '^19.1.0';
  }
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
}

function installStyles(appRoot) {
  const candidates = ['app/globals.css', 'src/app/globals.css', 'src/index.css', 'src/styles.css'].map((rel) => path.join(appRoot, rel));
  const file = candidates.find((candidate) => existsSync(candidate));
  const line = "@import '@csc/ui/styles.css';\n";
  if (!file) {
    console.log(`Add this line to the app's global CSS:\n${line.trim()}`);
    return;
  }
  const css = readText(file);
  if (!css.includes("@import '@csc/ui/styles.css'")) writeFileSync(file, line + css);
  console.log(`Stylesheet import added to ${path.relative(appRoot, file)}`);
}

function npmInstall(appRoot) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(npm, ['install'], { cwd: appRoot, stdio: 'inherit' });
  if ((result.status ?? 1) !== 0) {
    console.error(`npm install failed. package.json already depends on @csc/ui from ${UI_PACKAGE}.`);
    process.exit(result.status ?? 1);
  }
}

if (command !== 'init' && command !== 'add') {
  console.log(`Usage: ${INIT_COMMAND}\n       npx csc-ui add button`);
  console.log('The npm package named csc-ui is a different project. Install this library with the GitHub command.');
  process.exit(command ? 1 : 0);
}

const pkgPath = findPackageJson(process.cwd());
if (!pkgPath) {
  console.error('No package.json found. Run this inside an application.');
  process.exit(1);
}

installPackage(pkgPath);
installStyles(path.dirname(pkgPath));
npmInstall(path.dirname(pkgPath));

if (command === 'add') {
  const component = name || 'button';
  console.log(`@csc/ui is installed. Import it from '@csc/ui'. Example family: ${component}.`);
} else {
  console.log("@csc/ui is installed from GitHub. Paste JSX that imports from '@csc/ui'.");
}
