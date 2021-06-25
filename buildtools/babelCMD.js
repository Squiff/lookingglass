const util = require('util');
const exec = util.promisify(require('child_process').exec);

// params [] - params to pass to the command
// env: environment name
async function babelCMD(params, env) {
    const paramStr = params.join(' ');
    const envStr = env ? `--env-name ${env}` : '';

    // npx babel --help
    const cmdStr = `npx babel ${paramStr} ${envStr}`;

    const { stdout, stderr } = await exec(cmdStr);

    console.log(stdout);

    if (stderr) console.error(stderr);
}

module.exports = babelCMD;
