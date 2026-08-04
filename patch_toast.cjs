const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/top: 30px;\n\s*left: 50%;/, 'bottom: 80px;\n  left: 50%;');
css = css.replace(/transform: translateX\(-50%\) translateY\(-20px\);/, 'transform: translateX(-50%) translateY(20px);');

fs.writeFileSync('src/style.css', css);
