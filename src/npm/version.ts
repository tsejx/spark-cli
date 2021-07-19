import { run } from '../utils'
import columnify from 'columnify'

export default async function getVersionInfo() {
  const nodeVersion = await run('node -v')
  const npmVersion = await run('npm -v')
  const yarnVersion = await run('yarn -v')
  const cnpmVersion = await run('cnpm -v')

  console.log(columnify([
    {
      name: 'node',
      version: nodeVersion,
    },
    {
      name: 'npm',
      version: npmVersion,
    },
    {
      name: 'yarn',
      version: yarnVersion,
    },
    {
      name: 'cnpm',
      version: cnpmVersion,
    }
  ]))
}