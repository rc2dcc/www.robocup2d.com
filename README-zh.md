# robocup2d

[![powered by Egg.js][egg-image]][egg]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[egg-image]: https://img.shields.io/badge/Powered%20By-Egg.js-ff69b4.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/cnodejs/egg-cnode.svg?style=flat-square
[travis-url]: https://travis-ci.org/cnodejs/egg-cnode
[codecov-image]: https://img.shields.io/codecov/c/github/cnodejs/egg-cnode.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cnodejs/egg-cnode
[david-image]: https://img.shields.io/david/cnodejs/egg-cnode.svg?style=flat-square
[david-url]: https://david-dm.org/cnodejs/egg-cnode
[snyk-image]: https://snyk.io/test/github/cnodejs/egg-cnode/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/github/cnodejs/egg-cnode
## 简介
2d的环境，目前大部分高校和组织处于闭门造车的阶段，只有通过个别qq群进行交流，无法很好的将“资源”共享和交流。因此建立RoboCup2d论坛。
## 快速开始

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### 环境依赖

- [redis](https://redis.io/)
- [mongodb](https://www.mongodb.com/)

#### macOS 安装

```bash
brew install redis mongodb
brew services start redis
brew services start mongodb
```

#### Linux 安装

TBD

#### Windows 安装

TBD

### 如何开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 如何部署

```js 
// {app_root}/config/config.prod.js

exports.mini_assets = true;

exports.alinode = {
  // 从 `Node.js 性能平台` 获取对应的接入参数
  appid: process.env.EGG_ALINODE_APPID || '',
  secret: process.env.EGG_ALINODE_SECRET || '',
};
```

```bash
$ npm i --production
$ npm run assets
$ npm start
$ npm stop
```

### npm scripts脚本说明

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### docker部署教程

- [Develop / Deploy with Docker](tutorials/Docker.md)

[egg]: https://eggjs.org
