<template>
  <div class="home">
    <h1>爬虫程序</h1>
    <pre>
      const https = require('http');

function crawler(cb) {
  const req = https.get('http://39.99.185.180:3000/albums');
  req.end();
  req.on('response', (res) => {
    res.on('data', (data) => {
      cb(JSON.parse(data.toString()))
    })
  });
}

module.exports = crawler
    </pre>
  </div>
</template>

<script>

</script>
