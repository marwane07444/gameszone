const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/transform-origin: 50% 50%;/g, 'transform-origin: 50px 50px;');

fs.writeFileSync('src/style.css', css);
