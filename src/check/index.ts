import { Command } from 'commander'
import { isIP } from 'net';
import consoleOSInfo from './os';
import { consoleRemoteIpInfo, consoleIPInfo } from './ip';
import consoleNetworkInfo from './network';

export default function registCheckCommand() {
  const program = new Command('check')

  program
    .description('查看模块包信息')
    .arguments('<address>')
    .action((address) => {
      if (isIP(address) === 4) {
        consoleRemoteIpInfo(address)
      }
    })

  program
    .description('查询当前操作系统的环境信息')
    .command('os')
    .action(consoleOSInfo)

  program
    .description('查询 IP 地址')
    .command('ip')
    .action(consoleIPInfo)

  program
    .description('查询端口占用情况')
    .command('network')
    .option('-l, --listen', '仅列出在 Listen（监听）的服务状态（默认）')
    .option('-a, --all', '显示所有服务状态')
    .action(consoleNetworkInfo)

  return program
}
