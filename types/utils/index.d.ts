declare const isLinux: boolean;
declare const iMacOS: boolean;
declare const isWindows: boolean;
declare const run: (cmd: any, { unify }?: {
    unify?: boolean;
}) => Promise<unknown>;
export { run, isLinux, iMacOS, isWindows };
