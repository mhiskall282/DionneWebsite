const fs = require('fs');
const files = fs.readdirSync('./api').filter(f => f.endsWith('.ts'));
files.forEach(f => {
  let p = './api/' + f;
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/^\/\/ @ts-nocheck\r?\n/m, '');
  c = c.replace(/from '\.\/(.*?)'/g, 'from \'./$1.js\'');
  c = c.replace(/\.js\.js/g, '.js');
  fs.writeFileSync(p, c);
});
console.log('done');
