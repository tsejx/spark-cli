"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindows = exports.iMacOS = exports.isLinux = exports.run = void 0;
const child_process_1 = __importDefault(require("child_process"));
const isLinux = process.platform === 'linux';
exports.isLinux = isLinux;
const iMacOS = process.platform === 'darwin';
exports.iMacOS = iMacOS;
const isWindows = process.platform.startsWith('win');
exports.isWindows = isWindows;
const run = (cmd, { unify = false } = {}) => {
    return new Promise(resolve => {
        child_process_1.default.exec(cmd, (err, stdout, stderr) => {
            let output = ``;
            if (unify) {
                output = stdout.toString() + stderr.toString();
            }
            else {
                output = stdout.toString();
            }
            resolve((err ? '' : output).trim());
        });
    });
};
exports.run = run;
