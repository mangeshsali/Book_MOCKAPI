const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.use(middlewares);
server.use(router);

server.use(jsonServer.static(path.join(__dirname, "public")));

server.listen(3000, () => {
  console.log("JSON Server is running on port 5000");
});
