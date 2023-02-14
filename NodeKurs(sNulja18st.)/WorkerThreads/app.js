const crypto = require('crypto');
const https = require('https');

const start = performance.now();

// process.env.UV_THREADPOOL_SIZE = 124;


for (let i = 0; i < 50; i++) {
https.get('https://www.google.com', res => {
    res.on('data', () => {});
    res.on('end', () => {
        console.log(performance.now() - start);
    });
  });
}