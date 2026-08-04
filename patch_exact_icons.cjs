const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf-8');

css = css.replace(/\.app-img-wrapper img \{[\s\S]*?\}/, `.app-img-wrapper img {
  width: 94px;
  height: 94px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: var(--surface);
}`);

css = css.replace(/\.popup-app-icon \{[\s\S]*?\}/, `.popup-app-icon {
  width: 94px;
  height: 94px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: var(--surface);
  margin-bottom: 16px;
}`);

fs.writeFileSync('src/style.css', css);
