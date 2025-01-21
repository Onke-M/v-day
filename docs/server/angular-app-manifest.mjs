
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/v-day/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/v-day"
  }
],
  assets: {
    'index.csr.html': {size: 64056, hash: '7762714362fca2015ad0b0d534725779ba5c0c58953b305d47bbbca86f2484dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17153, hash: 'f81430f7824415135c311c31ac61651de308d6836a3e6900a0b68f6533424cdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 89493, hash: 'bad24873dc275a3f3f37cb554eabe1f9971ff55c4a0c626c8635f961d845ebbb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7JSMSIMA.css': {size: 88777, hash: 'SbSBw1Vf12E', text: () => import('./assets-chunks/styles-7JSMSIMA_css.mjs').then(m => m.default)}
  },
};
