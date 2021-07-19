import * as commander from 'commander';
const { program } = commander;

import registOSCommand from './os/index';
import registNpmCommand from './npm/index';

const processArg = process.argv;

program.addCommand(registOSCommand());
program.addCommand(registNpmCommand());

try {
  program.parse(processArg);
} catch (e) {
  console.log(e);
}