export declare function consoleRemoteIpInfo(address: any): Promise<void>;
export declare function consoleIPInfo(): Promise<void>;
export declare function getIpInfo(): Promise<{
    internalIPv4: any;
    internalIPv6: any;
    publicIPv4: string;
}>;
