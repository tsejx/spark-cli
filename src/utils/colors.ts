import chalk from "chalk"

export default function colors(color) {
  const identity = x => x
  const green = color ? s => chalk.green.bold(s) : identity;
  const red = color ? s => chalk.red.bold(s) : identity;
  const magenta = color ? s => chalk.magenta.bold(s) : identity;
  const yellow = color ? s => chalk.yellow.bold(s) : identity;
  const white = color ? s => chalk.white.bold(s) : identity;
  const dim = color ? s => chalk.dim(s) : identity;

  return {
    green,
    red,
    magenta,
    yellow,
    white,
    dim,
  }
}