const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/\.app-stats \{[\s\S]*?\}/, `.app-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 6px;
  padding: 0 2px;
  white-space: nowrap;
  overflow: hidden;
}`);

fs.writeFileSync('src/style.css', css);
