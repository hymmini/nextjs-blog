---
title: '预渲染的两种形式'
date: '2020-01-01'
---

Next.js 有两种预渲染的形式: **静态生成（Static Generation）** 和 **服务器端渲染（Server-side Rendering）**. 这两种方式的不同之处在于为 page（页面）生成 HTML 页面的**时机** 。

- **静态生成（Static Generation）Static Generation** 是一种在HTML**构建时**生成的预渲染形式，并且在每次页面请求时重用。
- **服务器端渲染（Server-side Rendering）** 是一种在**每次页面请求（request）**时 重新生成 HTML的预渲染形式。

重要的是，Next.js 允许你为每个页面 **选择**  预渲染的方式。你可以创建一个 “混合渲染” 的 Next.js 应用程序：对大多数页面使用“静态生成”，同时对其它页面使用“服务器端渲染”。