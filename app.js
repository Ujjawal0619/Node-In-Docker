const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 202;
  res.write(JSON.stringify({ msg: "Hello There!" }));
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listning on ${PORT}`);
});
