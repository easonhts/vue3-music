const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");

const path = require("path");

module.exports = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: '@import "@/styles/variable.scss";',
      // },
      less: {
        additionalData: '@import "@/styles/variable.less";',
      },
    },
  },
  server: {
    port: 8080,
    proxy: {
      "/api": {
        // 服务是本地node服务 见https://github.com/Binaryify/NeteaseCloudMusicApi
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
