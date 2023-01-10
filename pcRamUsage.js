const OS = require('node:os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = OS;

    const TOTAL_RAM = totalmem() / 1024 / 1024;
    const FREE_RAM = freemem() / 1024 / 1024;
    const USAGE = ((TOTAL_RAM - FREE_RAM) / TOTAL_RAM)*100;
    
    const STATS = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(TOTAL_RAM)} MB`,
        FreeRAM: `${parseInt(FREE_RAM)} MB`,
        Usage: `${USAGE.toFixed(2)}%`
    };
    console.clear();
    console.table(STATS);
    exports.PC_RAM_USAGE = STATS;
}, 1000);
