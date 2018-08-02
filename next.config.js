const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  }
  //   webpack: (config, {}) => {
  //     config.plugins = [
  //       new WorkboxPlugin.GenerateSW({
  //         runtimeCaching: [
  //           {
  //             urlPattern: /\//,
  //             handler: "networkFirst"
  //           }
  //         ]
  //       })
  //     ];
  //     return config;
  //   }
};
