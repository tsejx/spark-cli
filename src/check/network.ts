import netstat from 'node-netstat';
import columnify from 'columnify';

interface ProcessItem {
  protocol: string;
  pid: number;
  state: string;
  'Local Address': string;
  'Local Port': string;
  'Foreign Address': string;
  'Foreign Port': string;
  'Programe name'?: string;
}

export default function consoleNetworkInfo(options) {
  // 只有在 Linux 下才会显示程序名
  netstat.parsers.linux = netstat.parserFactories.linux({
    parseName: true,
  });

  const res = [];

  netstat({
    sync: true,
  }, (item) => {
    if (options.all !== true && item.state !== 'LISTEN') return;

    const payload: ProcessItem = {
      protocol: item.protocol,
      pid: item.pid,
      'Local Address': item.local.address,
      'Local Port': item.local.port,
      'Foreign Address': item.remote.address,
      'Foreign Port': item.remote.port,
      state: item.state
    }

    if (item.processName) {
      payload['Programe Name'] = item.processName;
    }

    res.push(payload);
  })

  console.log(columnify(res));
}