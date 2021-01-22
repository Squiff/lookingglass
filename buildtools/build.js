const fse = require('fs-extra');
const componentPackage = require('./buildComponents');
const buildPaths = require('./buildPaths');
const babelCMD = require('./babelCMD');

async function runBuild() {
    // clear previous build
    await fse.emptyDir(buildPaths.out);
    // ES modules
    await babelCMD([buildPaths.babelEntry, '--out-dir', buildPaths.esm], 'esm');
    // CommonJS Modules
    await babelCMD([buildPaths.babelEntry, '--out-dir', buildPaths.cjs], 'cjs');
    // create package to resolve ESM/CJS imports/requires
    await componentPackage();
    // copy SASS
    await fse.copy(buildPaths.sassEntry, buildPaths.sassOutput);
}

runBuild();
