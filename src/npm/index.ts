import { Command } from 'commander'

import getRepoInfo from './info'
import getVersionInfo from './version'

export default function registOSCommand() {
  const program = new Command('npm')

  program
    .description('查看模块包信息')
    .action(getVersionInfo)

  program
    .description('当前仓库模块包的信息')
    .command('info')
    .action(getRepoInfo)

  return program
}
