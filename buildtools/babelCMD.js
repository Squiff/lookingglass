const util = require('util');
const exec = util.promisify(require('child_process').exec);

const buildPaths = require('./buildPaths');

// params [] - params to pass to the command
// env: environment name
async function babelCMD(params, env) {
    paramStr = params.join(' ');
    envStr = env ? `--env-name ${env}` : '';

    // npx babel --help
    cmdStr = `npx babel ${paramStr} ${envStr}`;

    const { stdout, stderr } = await exec(cmdStr);

    console.log(stdout);

    if (stderr) console.error(stderr);
}

module.exports = babelCMD;
