import childProcess from 'child_process';

const isLinux = process.platform === 'linux'
const iMacOS = process.platform === 'darwin'
const isWindows = process.platform.startsWith('win')

const run = (cmd, { unify = false } = {}) => {
  return new Promise(resolve => {
    childProcess.exec(
      cmd,
      (err, stdout, stderr) => {
        let output = ``;
        if (unify) {
          output = stdout.toString() + stderr.toString();
        } else {
          output = stdout.toString();
        }
        resolve((err ? '' : output).trim());
      }
    );
  });
};

export {
  run,
  isLinux,
  iMacOS,
  isWindows
}