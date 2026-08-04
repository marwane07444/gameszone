const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/\.progress-checkmark \{[\s\S]*?\}/, `.progress-checkmark {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  transition: stroke-dashoffset 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  stroke: #2563eb;
  transform-origin: 50px 50px;
}`);

fs.writeFileSync('src/style.css', css);
