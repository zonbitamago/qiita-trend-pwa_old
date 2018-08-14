const LRUCache = require("lru-cache");
const wrap = require("await-wrap");

const cache = new LRUCache({
  max: 150,
  maxAge: 1000 * 60 * 15 // 15 minutes
});
const key = "qiita-trend-api";

module.exports = app => async (req, res, pagePath) => {
  if (req.query.bust) {
    cache.reset();
  }

  if (cache.has(key)) {
    console.log(`RENDER CACHE HIT: ${key}`);

    return res.send(cache.get(key));
  }

  const { err, data } = await wrap(app.renderToHTML(req, res, pagePath));

  if (err) return app.renderError(err, req, res, pagePath);

  console.log(`RENDER CACHE MISS: ${key}`);

  cache.set(key, data);

  return res.send(data);
};
