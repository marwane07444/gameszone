const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/@media \(max-width: 640px\) \{\n\s*\.app-img-wrapper \{ height: 90px; \}\n\}/, '');
css = css.replace(/@media \(max-width: 640px\) \{\n\s*\.app-img-wrapper \{ height: 90px; border-radius: 8px; \}\n\}/, '@media (max-width: 640px) {\n  .app-img-wrapper { height: 90px; }\n}');

fs.writeFileSync('src/style.css', css);
