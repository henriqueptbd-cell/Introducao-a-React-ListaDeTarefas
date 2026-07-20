import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

server.get("/", (_req, res) => {
  res.json({
    message: "JSON Server está rodando",
    endpoints: ["/tarefas"],
  });
});

server.use(router);

const port = Number(process.env.PORT ?? 3333);
const host = "0.0.0.0";

server.listen(port, host, () => {
  console.log(`JSON Server running on http://${host}:${port}`);
});
