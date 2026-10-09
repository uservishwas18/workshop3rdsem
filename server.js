const program3 = require('http')
const createServer = program3.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Vishwas</h1>');
    res.end();
});
createServer.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});