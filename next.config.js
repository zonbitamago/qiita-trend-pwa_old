const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  },
  webpack(config, { dev }) {
    console.log(config);

    return config;
  }
});
