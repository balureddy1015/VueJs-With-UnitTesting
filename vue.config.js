module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://www.westelm.com/",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "" },
        logLevel: "debug",
      },
    },
  },
};
