const HTTP = require('http');
const PC_RAM_USAGE = require('./pcRamUsage.js');


const HOST = 'http://localhost';
const PORT = 3000;

HTTP.createServer((req, res) => {
    let url = req.url;

    if (url === '/stats') {
        res.end(JSON.stringify(PC_RAM_USAGE, null, 2));
    } else {
        res.end(`<head><meta charset="UTF-8"></head>
        <h1>Olá mundo</h1>`)
    }
})
.listen(PORT, () => console.log(`Server is runing in ${HOST}:${PORT}`));
