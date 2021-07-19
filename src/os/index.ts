import { Command } from 'commander';

import getOSInfo from './os';

export default function registOSCommand() {
  const program = new Command('os');

  program
    .description('查看系统信息')
    .action(getOSInfo)

  return program;
}
