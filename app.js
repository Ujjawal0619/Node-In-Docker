const http = require("http");
const os = require("os");
const PORT = process.env.PORT | 3000;

const server = http.createServer((req, res) => {
  res.end(JSON.stringify({ hostname: os.hostname(), status: "running" }));
});

server.listen(PORT, () => {
  console.log(`Server is listning on ${PORT}`);
});
