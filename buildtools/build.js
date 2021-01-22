const fse = require('fs-extra');
const componentPackage = require('./buildComponents');
const buildPaths = require('./buildPaths');
const babelCMD = require('./babelCMD');

let logID = 1;

function buildLog(msg) {
    console.log(`Build Step ${logID}: ${msg}`);
    logID += 1;
}

async function runBuild() {
    buildLog('Clear build directory');
    await fse.emptyDir(buildPaths.out);

    buildLog('Babel - ES Modules');
    await babelCMD([buildPaths.babelEntry, '--out-dir', buildPaths.esm], 'esm');

    buildLog('Babel - CommonJS Modules');
    await babelCMD([buildPaths.babelEntry, '--out-dir', buildPaths.cjs], 'cjs');

    buildLog('Create Component Package');
    await componentPackage();

    buildLog('Copy SASS Directory');
    await fse.copy(buildPaths.sassEntry, buildPaths.sassOutput);
}

runBuild();
