# VuePress 最小复现仓库

## 问题描述

启用百度分析插件后，控制台报错 Error: useClientData() is called without provider.

```
app-1_Tucv2M.js:27 Uncaught (in promise) Error: useClientData() is called without provider.
    at bt (app-1_Tucv2M.js:27:22935)
    at he (app-1_Tucv2M.js:27:23035)
    at Gh (app-1_Tucv2M.js:34:85878)
    at Object.enhance (app-1_Tucv2M.js:34:86124)
    at o4 (app-1_Tucv2M.js:34:89128)
```

且侧边栏分组无法展开，icon 无法加载。
