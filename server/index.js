const express = require("express");
const next = require("next");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.get("*", (_, res, next) => {
        res.setHeader("Cache-Control", "max-age=43200, immutable");
        next();
      });
    }

    server.get("/service-worker.js", ServiceWorker(app));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, "../", ".next", "service-worker.js");

  app.serveStatic(req, res, filePath);
};
