import * as commander from 'commander';
const { program } = commander;

import registOSCommand from './os/index';
import registNpmCommand from './npm/index';
import registCheckCommand from './check/index';

const processArg = process.argv;

program.addCommand(registOSCommand());
program.addCommand(registNpmCommand());
program.addCommand(registCheckCommand())

try {
  program.parse(processArg);
} catch (e) {
  console.log(e);
}