"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const columnify_1 = __importDefault(require("columnify"));
async function getVersionInfo() {
    const nodeVersion = await utils_1.run('node -v');
    const npmVersion = await utils_1.run('npm -v');
    const yarnVersion = await utils_1.run('yarn -v');
    const cnpmVersion = await utils_1.run('cnpm -v');
    console.log(columnify_1.default([
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
    ]));
}
exports.default = getVersionInfo;
