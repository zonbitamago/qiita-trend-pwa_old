const express = require("express");
const next = require("next");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const render = require("./render");
const RenderCache = render(app);
const moment = require("moment");

app
  .prepare()
  .then(() => {
    const server = express();

    // if (!dev) {
    server.get("*", (_, res, next) => {
      //s-maxage=31536000 - 1年
      //max-age=43200 -12時間
      res.setHeader(
        "Cache-Control",
        "s-maxage=31536000, max-age=43200, immutable"
      );
      next();
    });
    // }

    server.get("/service-worker.js", ServiceWorker(app));
    server.get("/", (req, res) => {
      showAccessLog(req);
      RenderCache(req, res, "/");
    });

    server.get("*", (req, res) => {
      showAccessLog(req);
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

const showAccessLog = req => {
  console.info(
    "[" +
      moment()
        .utc()
        .add(9, "hours")
        .format() +
      "]" +
      " Access: " +
      req.url
  );
};
