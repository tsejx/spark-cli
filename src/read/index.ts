import { Command } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';
import jsome from 'jsome';

export default function registReadCommand() {
  const program = new Command('read')

  program
    .description('查看文件')
    .arguments('<file>')
    .action((file) => {
      const extname = path.extname(file);

      if (extname === '.json') {
        const jsonData = fs.readFileSync(path.join(file), { encoding: 'utf8' }).toString();

        try {
          const data = JSON.parse(jsonData);

          jsome(data);
        } catch (err) {
          console.log('JSON 解析失败，请确保 JSON 文件内容的有效')
        }
      } else {
        console.log('暂不支持查看该格式文件')
      }
    })

  return program
}
