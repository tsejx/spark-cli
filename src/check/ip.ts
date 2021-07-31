import * as http from 'http';
import publicIp from 'public-ip';
import address from 'address';
import columnify from 'columnify';

export async function consoleRemoteIpInfo(address) {
  const req = http.request(`http://www.evansfix.com/ip.php?ip=${address}`, (res) => {
    res.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  })

  req.end();
}


export async function consoleIPInfo() {
  const ipInfo = await getIpInfo();

  const res = Object.entries(ipInfo).map(([key, value]) => {
    switch (key) {
      case 'internalIPv4':
        return {
          name: 'Internal IPv4',
          value
        }
      case 'internalIPv6':
        return {
          name: 'Internal IPv6',
          value
        }
      case 'publicIPv4':
        return {
          name: 'Public IPv4',
          value: value
        }
    }
  })

  console.log(columnify(res));
}

export async function getIpInfo() {
  const internalIPv4 = address.ip()
  const internalIPv6 = address.ipv6()

  const publicIPv4 = await publicIp.v4();

  return {
    internalIPv4,
    internalIPv6,
    publicIPv4
  }
}