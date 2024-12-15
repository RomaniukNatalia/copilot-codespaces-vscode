// Import the HTTP Module
const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    // Set the response header content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Write the response content
    res.end('Hello, world! This is your web server running.');
});

// Define the port number
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

