"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const info_1 = __importDefault(require("./info"));
const version_1 = __importDefault(require("./version"));
function registOSCommand() {
    const program = new commander_1.Command('npm');
    program
        .description('查看模块包信息')
        .action(version_1.default);
    program
        .description('当前仓库模块包的信息')
        .command('info')
        .action(info_1.default);
    return program;
}
exports.default = registOSCommand;
