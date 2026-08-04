const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/padding: 14px 20px;/, 'padding: 14px 20px;\n  min-height: 56px;');
css = css.replace(/padding: 12px 16px;/g, 'padding: 12px 16px;\n  min-height: 48px;');

fs.writeFileSync('src/style.css', css);
