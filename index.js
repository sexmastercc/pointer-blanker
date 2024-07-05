const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const github = 'https://pokjaca.nyc.dom.my.id/';

const proxy = createProxyMiddleware({
  target: github,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    return github;
  }
});

app.use('*', proxy);

const port = process.env.PORT || 443;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
