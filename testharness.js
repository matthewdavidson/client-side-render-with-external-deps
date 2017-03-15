var express = require('express');
var Client = require('oc-client');

var app = express();

var client = new Client({
  registries: {
    serverRendering: 'http://localhost:3000/'
  }
});

app.get('/', function (req, res) {
  client.renderComponent('client-side-render-with-external-deps', {}, function (err, html) {
    console.log(html);
    res.send(html);
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});