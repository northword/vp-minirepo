import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { baiduAnalyticsPlugin } from "@vuepress/plugin-baidu-analytics";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  plugins: [
    baiduAnalyticsPlugin({
      id: "fc904ee59939c7c2284063619b0ef533", // northword
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
