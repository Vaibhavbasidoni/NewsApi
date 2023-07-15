const corsProxy = require('cors-anywhere');

const port = 8080; // Choose a port number for the proxy server

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, () => {
  console.log(`CORS Anywhere proxy server running on port ${port}`);
});
