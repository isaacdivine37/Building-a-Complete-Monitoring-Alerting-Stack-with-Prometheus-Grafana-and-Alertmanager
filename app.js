const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from your monitored app! 🚀\n');
});

server.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});