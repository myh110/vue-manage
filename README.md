
# jl-mis(后台管理系统)


项目是基于vue-cli 3+ 构建的,请先将vue-cli升级到3+版本,vue-cli3 传送门(https://cli.vuejs.org/zh/)。

线上地址(http://kongkong.fence.wmdev2.lsh123.com/dashboard)
## 技术栈

vue2 + vuex + vue-router + element-ui + webpack + ES6/7 + axios + less + flex + svg

### 项目图形化管理界面
```
vue ui
```

## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 8.0 以上版本

```

npm install 

npm run serve

```


### 打包
```
npm run build
```


### 代码的 lint
```
npm run lint
```
# 项目布局

```
.
├── public                                      // HTML 和静态资源
│   ├── favicon.ico                             // 图标
│   ├── index.html                              // 入口html文件
├── src                                         // 源码目录
│   ├── assets                                  // 静态资源
│   │   ├── images                              // 公共图片
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   ├── page                                // 页面
│   ├── libs                                    // 封装库
│   │   ├── storage.js                          // 对cookie 和 localStorage 的封装
│   ├── plugins                                 // 引用的插件
│   │   ├── axios.js                            // 对axios的的封装（拦截器相关）
│   │   ├── element.js                          // 引入element-ui
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── service.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   ├── store                                   // vuex的状态管理
│   │   ├── actions.js                          // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── store.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   │   ├── urlGroups.js                    // 路由分组（权限相关）
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style                                   // 样式字体相关
│       ├── fonts                               // 字体相关
│       ├── utility.less                        // 公共样式文件
│       ├── mixin.less                          // 样式配置文件
│       └── normalize.css                       // 样式重置
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── vue.config.js                               // vue-cli 3+  暴露出来的webpack相关的配置文件
.


```