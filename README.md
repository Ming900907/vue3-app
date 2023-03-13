# Vue 3 + TypeScript + Vite 模板项目

环境依赖

-   node: v18.13.0
-   vite: ^4.1.0
-   vue: ^3.2.45
-   typescript: 4.5.4
-   pinia: ^2.0.33
-   vue-router: ^4.1.6
-   vueuse: ^9.13.0 [https://vueuse.org/]
-   eslint: ^8.36.0
-   prettier: ^2.8.4
-   commitizen: ^4.3.0
-   husky: ^8.0.3

```bash
cd vue3-app && yarn
```

# 代理配置

```javascript
  proxy: {
           '/api': {
               target: 'your https address',
               changeOrigin: true,
               rewrite: (path: string) => path.replace(/^\/api/, '')
           }
       }
```
