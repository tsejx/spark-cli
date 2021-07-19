"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const os_1 = __importDefault(require("./os"));
function registOSCommand() {
    const program = new commander_1.Command('os');
    program
        .description('查看系统信息')
        .action(os_1.default);
    return program;
}
exports.default = registOSCommand;
