'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    let q = this.ctx.query.q;
    q = encodeURIComponent(q);
    if (q.length === 0) {
      return this.ctx.redirect('/');
    }

    switch (this.config.search) {
      case 'google':
        return this.ctx.redirect(`https://www.google.com.hk/#hl=zh-CN&q=site:robocup2d.com+${q}`);
      case 'baidu':
        return this.ctx.redirect(`https://www.baidu.com/s?wd=site:robocup2d.com+${q}`);
      case 'local':
        return await this.ctx.render('search/index', await this.service.search.searchLocal(this.ctx.query, q));
      default:
        return this.ctx.redirect('/');
    }
  }
}

module.exports = SearchController;
