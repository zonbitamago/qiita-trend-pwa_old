const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");

module.exports = withOffline(withCSS());
