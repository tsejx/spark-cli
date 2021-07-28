import { Command } from 'commander'
import { isIP } from 'net';
import * as http from 'http';

export default function registCheckCommand() {
  const program = new Command('check')

  program
    .description('查看模块包信息')
    .arguments('<address>')
    .action((address) => {
      const isIPAddressFlag = isIP(address)

      if (isIPAddressFlag === 4) {
        const req = http.request(`http://www.evansfix.com/ip.php?ip=${address}`, (res) => {
          res.on('data', (chunk) => {
            console.log(chunk.toString());
          });
        })

        req.end();
      } else if (isIPAddressFlag === 6) {
        console.log('暂时不提供 IPv6 查询方法');
      } else {
        console.log('输入参数不是 IP 地址');
      }
    })

  return program
}
