"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformRelease = void 0;
const os = __importStar(require("os"));
const columnify_1 = __importDefault(require("columnify"));
const address_1 = __importDefault(require("address"));
const getMacAddress = async () => {
    return new Promise((resolve, reject) => {
        try {
            address_1.default.mac(function (err, addr) {
                resolve(addr);
            });
        }
        catch (err) {
            reject(null);
        }
    });
};
const macOSMap = new Map([
    [19, 'Catalina'],
    [18, 'Mojave'],
    [17, 'High Sierra'],
    [16, 'Sierra'],
    [15, 'El Capitan'],
    [14, 'Yosemite'],
    [13, 'Mavericks'],
    [12, 'Mountain Lion'],
    [11, 'Lion'],
    [10, 'Snow Leopard'],
    [9, 'Leopard'],
    [8, 'Tiger'],
    [7, 'Panther'],
    [6, 'Jaguar'],
    [5, 'Puma']
]);
const winMap = new Map([
    ['10.0', '10'],
    ['6.3', '8.1'],
    ['6.2', '8'],
    ['6.1', '7'],
    ['6.0', 'Vista'],
    ['5.2', 'Server 2003'],
    ['5.1', 'XP'],
    ['5.0', '2000'],
    ['4.9', 'ME'],
    ['4.1', '98'],
    ['4.0', '95']
]);
function getPlatformRelease(platform, release) {
    if (platform === 'darwin') {
        const releaseNum = Number(release.split('.')[0]);
        const name = macOSMap.get(releaseNum);
        const version = '10.' + (releaseNum - 4);
        return `macOS ${name} ${version}`;
    }
    if (platform === 'win32') {
        const version = (/\d+\.\d/.exec(release) || [])[0];
        return `Windows ${winMap.get(version)}`;
    }
    return 'Linux';
}
exports.getPlatformRelease = getPlatformRelease;
async function getOSInfo() {
    const platform = os.platform();
    const release = os.release();
    const macAddress = await getMacAddress();
    const platformRelease = getPlatformRelease(platform, release);
    const info = [{
            name: 'OS',
            value: platformRelease
        }, {
            name: 'IP Address',
            value: address_1.default.ip()
        }, {
            name: 'IPv6 Address',
            value: address_1.default.ipv6()
        }, {
            name: 'MAC Address',
            value: macAddress
        }];
    const columns = columnify_1.default(info);
    console.log(columns);
}
exports.default = getOSInfo;
